import { Module } from '@nestjs/common';

import { PrismaService } from '../../features';
import { RolesService } from '../../features/roles';
import { UserService } from '../user';

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService, RolesService, UserService],
})
export class ProjectsModule {}
