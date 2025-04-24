import { Permissions } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class RoleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsArray()
  @IsEnum(Permissions, {
    each: true,
  })
  permissions: Permissions[];
}
