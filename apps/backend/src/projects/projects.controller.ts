import { Controller, Get } from '@nestjs/common';

import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async get() {
    return this.projectsService.get();
  }

  @Get('/count')
  async getCount(): Promise<number> {
    return this.projectsService.getCount();
  }
}
