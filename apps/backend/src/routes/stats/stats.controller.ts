import { Controller, Query } from '@nestjs/common';

import { GetProjectCount, GetTopStack } from '@repo/backend-types';
import { GetGHStars } from '@repo/backend-types/src';

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
  async stack(@Query('take') take: string | undefined): Promise<GetTopStack> {
    return handleData(
      await this.statsService.calculateTopStack({
        take,
      }),
    );
  }

  @Endpoint('GET', '/stars')
  async stars(): Promise<GetGHStars> {
    return handleData(await this.statsService.stars());
  }
}
