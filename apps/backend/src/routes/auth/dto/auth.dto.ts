import { IsString, MaxLength, MinLength } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class AuthDto {
  @IsString({
    message: issueErrorCode('LOGIN_IS_NOT_A_STRING'),
  })
  @MinLength(4, {
    message: issueErrorCode('LOGIN_MIN_LENGTH'),
  })
  @MaxLength(12, {
    message: issueErrorCode('LOGIN_MAX_LENGTH'),
  })
  login: string;

  @IsString({
    message: issueErrorCode('PASSWORD_IS_NOT_A_STRING'),
  })
  @MinLength(6, {
    message: issueErrorCode('PASSWORD_MIN_LENGTH'),
  })
  @MaxLength(12, {
    message: issueErrorCode('PASSWORD_MAX_LENGTH'),
  })
  password: string;
}
