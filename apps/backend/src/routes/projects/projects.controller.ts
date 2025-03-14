import { Controller, Get, Param } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';

import type { BackendResponse, SuccessfulResponse } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { DataService } from '~/features';
// eslint-disable-next-line ts/consistent-type-imports
import { ProjectsService } from '~/routes/projects';

@Controller('project')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly data: DataService,
  ) {}

  @Get('/single/:projectId/stack')
  async getStack(
    @Param('projectId') projectId: string,
  ): Promise<BackendResponse<StackTech[]>> {
    return this.data.run(async () =>
      this.projectsService.getStackById(projectId),
    );
  }

  @Get('/single/:projectId/get')
  async getById(
    @Param('projectId') projectId: string,
  ): Promise<SuccessfulResponse<Project | null>> {
    const project = await this.projectsService.getById(projectId);
    return {
      data: project,
    };
  }

  @Get('/all')
  async get(): Promise<SuccessfulResponse<Project[]>> {
    const projects = await this.projectsService.getAll();
    return {
      data: projects,
    };
  }

  @Get('/all/count')
  async getCount(): Promise<SuccessfulResponse<number>> {
    const count = await this.projectsService.getCount();
    return {
      data: count,
    };
  }
}
