import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { verify } from 'argon2';
import { CookieOptions, Response } from 'express';
import { LenientAutocomplete } from 'xenopomp-essentials';

import { IssueTokens, LoginResult } from '@repo/backend-types';
import { EXPIRE_DAY_REFRESH_TOKEN, REFRESH_TOKEN_NAME } from '@repo/constants';
import { issueErrorCode } from '@repo/errors';

import { handleData } from '../../features';
import { UserService } from '../user';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  private async issueUserWithTokens({ password, ...user }: User) {
    /** Access and refresh tokens */
    const tokens = this.issueToken(user.id);

    return {
      user,
      ...tokens,
    };
  }

  async login(dto: AuthDto): Promise<LoginResult> {
    // Get user and sanitize him
    const { password, ...user } = await this.validateUser(dto);

    return this.issueUserWithTokens({ password, ...user });
  }

  async register(dto: AuthDto) {
    const { type } = await this.userService.isExact(dto);

    switch (type) {
      // We can login user here
      case 'exact': {
        return this.login(dto);
      }

      // Login is taken
      case 'loginOnly': {
        throw new BadRequestException(issueErrorCode('LOGIN_IS_TAKEN'));
      }
    }

    // eslint-disable-next-line unused-imports/no-unused-vars
    const { password, ...user } = await this.userService.create(dto);
    return user;
  }

  /**
   * Generates new tokens if given refreshToken
   * is valid.
   * @param refreshToken
   */
  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);
    if (!result)
      throw new UnauthorizedException(issueErrorCode('UNAUTHORIZED'));

    const userFromDb = await this.userService.getById(result.id);

    if (!userFromDb) {
      throw new NotFoundException(issueErrorCode('USER_DOES_NOT_EXIST'));
    }

    return this.issueUserWithTokens(userFromDb);
  }

  /** Returns config for cookie response. */
  private getResponseConfig(): CookieOptions {
    const envMode =
      this.configService.get<LenientAutocomplete<'development' | 'production'>>(
        'NODE_ENV',
      ) || 'development';

    return {
      httpOnly: true,
      domain: this.configService.getOrThrow('APP_HOST'),
      // true if production
      secure: envMode === 'production',
      // lax if production
      // sameSite: envMode === 'prod' ? 'none' : 'lax',
      sameSite: 'lax',
      priority: 'high',
    };
  }

  /** Add refreshToken to server cookies. */
  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + EXPIRE_DAY_REFRESH_TOKEN);

    res.cookie(REFRESH_TOKEN_NAME, refreshToken, {
      ...this.getResponseConfig(),
      expires: expiresIn,
    });
  }

  /** Clear cookie header of response. */
  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(REFRESH_TOKEN_NAME, '', {
      ...this.getResponseConfig(),
      expires: new Date(0),
    });
  }

  /** Generates both of access and refresh tokens. */
  private issueToken(userId: User['id']): IssueTokens {
    const data = { id: userId };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Checks if user with certain email exists
   * and return him.
   */
  private async validateUser(dto: AuthDto): Promise<User> {
    const user = await this.userService.getByLogin(dto.login);

    if (!user)
      throw new NotFoundException(issueErrorCode('USER_DOES_NOT_EXIST'));

    /** True if password from dto is valid. */
    const isValid = await verify(user.password, dto.password);

    if (!isValid)
      throw new UnauthorizedException(issueErrorCode('UNAUTHORIZED'));

    return user;
  }
}
