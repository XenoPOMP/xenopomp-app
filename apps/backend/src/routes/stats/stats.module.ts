import { Module } from '@nestjs/common';

import { PrismaService } from '../../features';
import { ProjectsService } from '../projects';

import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  controllers: [StatsController],
  providers: [StatsService, ProjectsService, PrismaService],
})
export class StatsModule {}
