import {
  Body,
  Controller,
  Param,
  Query,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { REFRESH_TOKEN_NAME } from '@repo/constants';
import { issueErrorCode } from '@repo/errors';

import { Endpoint } from '../../decorators';
import { handleData } from '../../features';

import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Endpoint('POST', '/login', {
    validate: true,
  })
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.login(dto);
    this.authService.addRefreshTokenToResponse(res, refreshToken);

    return handleData(response);
  }

  @Endpoint('POST', '/register', {
    validate: true,
  })
  async register(@Body() dto: AuthDto) {
    return handleData(await this.authService.register(dto));
  }

  @Endpoint('POST', 'login/access-token')
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshTokenFromCookies = req.cookies[REFRESH_TOKEN_NAME];

    /** Check if refreshToken is not provided through cookies. */
    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenFromResponse(res);
      throw new UnauthorizedException(issueErrorCode('INVALID_REFRESH_TOKEN'));
    }

    /** Issue new tokens. */
    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies,
    );

    /** Assign refreshToken to response. */
    this.authService.addRefreshTokenToResponse(res, refreshToken);

    return handleData(response);
  }

  @Endpoint('POST', '/logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshTokenFromResponse(res);

    return handleData({
      logout: true,
    });
  }
}
