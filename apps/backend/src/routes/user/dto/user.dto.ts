import { IsEmail, IsString, MinLength } from 'class-validator';

import { ERROR_CODES } from '@repo/errors';

import type { AuthDto } from '../../auth/dto';

export class UserDto implements AuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: `ERR${ERROR_CODES.VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH}`,
  })
  password: string;
}
