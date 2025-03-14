import { Module } from '@nestjs/common';

import { PrismaService } from '~/features';
import { ProjectsController, ProjectsService } from '~/routes/projects';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
