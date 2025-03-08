import { Module } from '@nestjs/common';

import { LocalizationService } from '../localization.service';
import { PrismaService } from '../prisma.service';

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService, LocalizationService],
})
export class ProjectsModule {}
