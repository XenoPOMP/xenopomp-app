import { Controller, Get } from '@nestjs/common';

import type { LocalizedProject, SuccessfulResponse } from '@repo/backend-types';

import type { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async get(): Promise<SuccessfulResponse<LocalizedProject[]>> {
    const projects = await this.projectsService.get();
    return {
      data: projects,
    };
  }

  @Get('/count')
  async getCount(): Promise<SuccessfulResponse<number>> {
    const count = await this.projectsService.getCount();
    return {
      data: count,
    };
  }
}
