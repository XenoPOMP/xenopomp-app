import { Controller, Get, Param } from '@nestjs/common';
import type { StackTech } from '@prisma/client';

import type { LocalizedProject, SuccessfulResponse } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { ProjectsService } from './projects.service';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/single/:projectId/stack')
  async getStack(
    @Param('projectId') projectId: string,
  ): Promise<SuccessfulResponse<StackTech[]>> {
    const stack = await this.projectsService.getStackById(projectId);
    return {
      data: stack,
    };
  }

  @Get('/single/:projectId/get')
  async getById(@Param('projectId') projectId: string) {
    return {
      data: 'sus',
    };
  }

  @Get('/all')
  async get(): Promise<SuccessfulResponse<LocalizedProject[] | null>> {
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
