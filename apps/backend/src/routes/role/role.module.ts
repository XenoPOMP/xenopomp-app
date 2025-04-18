import { Module } from '@nestjs/common';

import { PrismaService } from '../../features';
import { RolesService } from '../../features/roles';
import { UserService } from '../user';

import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RolesService, PrismaService, UserService],
})
export class RoleModule {}
