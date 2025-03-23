import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class UserDto {
  @IsEmail(
    {},
    {
      message: issueErrorCode('EMAIL_IS_INVALID'),
    },
  )
  email: string;

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
