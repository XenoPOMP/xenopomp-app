import { Controller } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUserType } from '@repo/backend-types';

import { CurrentUser, Endpoint } from '../../decorators';
import { handleData } from '../../features';

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
}
