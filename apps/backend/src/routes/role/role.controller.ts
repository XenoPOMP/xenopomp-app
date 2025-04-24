import { Body, Controller } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUserType } from '@repo/backend-types';

import { CurrentUser, Endpoint } from '../../decorators';
import { handleData } from '../../features';

import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Endpoint('GET', '/user', {
    authRequired: true,
  })
  async getByUser(@CurrentUser('id') userId: User['id']): Promise<GetUserType> {
    return handleData(await this.roleService.getRoleByUserId(userId));
  }

  @Endpoint('POST', '/', {
    authRequired: true,
    permissions: {
      createRoles: true,
    },
    validate: true,
  })
  async create(@Body() dto: RoleDto) {}
}
