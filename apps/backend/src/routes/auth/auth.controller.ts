import {
  Body,
  Controller,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { LoginResult } from '@repo/backend-types';
import { LoginResultRes, LogoutResultRes } from '@repo/backend-types/src';
import { REFRESH_TOKEN_NAME } from '@repo/constants';
import { issueErrorCode } from '@repo/errors';

import { Endpoint } from '../../decorators';
import { handleData } from '../../features';

import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * This method removes refreshToken from ready-to-return
   * auth data. Also applies refresh token to user, if it deserves it.
   * @param result   result of successful auth proceed
   * @param res      pass-through response
   * @private
   * @example
   * // Use service to login user. This method returns user with
   * // both tokens set. this.createAuthMethod applies refreshToken to
   * // response and removes it from endpoint return data.
   * const loginResult = await this.authService.login(dto);
   * return this.createAuthMethod(loginResult, res);
   */
  private async createAuthMethod(
    result: LoginResult,
    res: Response,
  ): Promise<LoginResultRes> {
    const { refreshToken, ...response } = result;
    this.authService.addRefreshTokenToResponse(res, refreshToken);
    return handleData(response);
  }

  @Endpoint('POST', '/login', {
    validate: true,
  })
  async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResultRes> {
    const loginResult = await this.authService.login(dto);
    return this.createAuthMethod(loginResult, res);
  }

  @Endpoint('POST', '/register', {
    validate: true,
  })
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResultRes> {
    const registerResult = await this.authService.register(dto);
    return this.createAuthMethod(registerResult, res);
  }

  @Endpoint('POST', 'login/access-token')
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResultRes> {
    const refreshTokenFromCookies = req.cookies?.[REFRESH_TOKEN_NAME];

    /** Check if refreshToken is not provided through cookies. */
    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenFromResponse(res);
      throw new UnauthorizedException(issueErrorCode('UNAUTHORIZED'));
    }

    /** Issue new tokens. */
    const tokensResult = await this.authService.getNewTokens(
      refreshTokenFromCookies,
    );
    return this.createAuthMethod(tokensResult, res);
  }

  @Endpoint('POST', '/logout')
  async logout(
    @Res({ passthrough: true }) res: Response,
  ): Promise<LogoutResultRes> {
    this.authService.removeRefreshTokenFromResponse(res);

    return handleData({
      logout: true,
    });
  }
}
