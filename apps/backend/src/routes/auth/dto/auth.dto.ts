import { IsEmail, IsString, MinLength } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class AuthDto {
  @IsEmail(
    {},
    {
      message: issueErrorCode('VALIDATION_FAILED_IS_EMAIL'),
    },
  )
  email: string;

  @IsString()
  @MinLength(6, {
    message: issueErrorCode('VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH'),
  })
  password: string;
}
