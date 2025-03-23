import { Controller, Query } from '@nestjs/common';
import { StackType } from '@prisma/client';

import { GetProjectCount } from '@repo/backend-types';

import { Endpoint } from '../../decorators';
import { handleData } from '../../features';
import { ProjectsService } from '../projects';

import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(
    private readonly statsService: StatsService,
    private readonly projectsService: ProjectsService,
  ) {}

  @Endpoint('GET', '/project-count')
  async getCount(): Promise<GetProjectCount> {
    return handleData(await this.projectsService.getCount());
  }

  @Endpoint('GET', '/stack')
  async stack(@Query('take') take: string | undefined) {
    return handleData(
      await this.statsService.calculateTopStack({
        take,
      }),
    );
  }
}
