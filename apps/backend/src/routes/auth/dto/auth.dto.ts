import { IsEmail, IsString, MinLength } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class AuthDto {
  @IsEmail(
    {},
    {
      message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE'),
    },
  )
  email: string;

  @IsString({
    message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE'),
  })
  @MinLength(6, {
    message: issueErrorCode('VALIDATION_MIN_LENGTH'),
  })
  password: string;
}
