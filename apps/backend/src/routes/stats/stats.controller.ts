import { Controller } from '@nestjs/common';

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

  /** Amount of taking most seen stack. */
  TAKE_STACK_ENTRIES = 3;

  @Endpoint('GET', '/project-count')
  async getCount(): Promise<GetProjectCount> {
    return handleData(await this.projectsService.getCount());
  }

  @Endpoint('GET', '/stack')
  async stack() {
    await this.statsService.calculateTopStack();
  }
}
