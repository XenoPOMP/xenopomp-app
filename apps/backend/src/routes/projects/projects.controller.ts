import { Controller, Get, Param } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';

import type { DataResponse } from '@repo/backend-types';

import { handleData } from '../../features';

// eslint-disable-next-line ts/consistent-type-imports
import { ProjectsService } from './projects.service';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/single/:projectId/stack')
  async getStack(
    @Param('projectId') projectId: string,
  ): Promise<DataResponse<StackTech[]>> {
    return handleData(await this.projectsService.getStackById(projectId));
  }

  @Get('/single/:projectId/get')
  async getById(
    @Param('projectId') projectId: string,
  ): Promise<DataResponse<Project | null>> {
    const project = await this.projectsService.getById(projectId);
    return {
      data: project,
    };
  }

  @Get('/all')
  async get(): Promise<DataResponse<Project[]>> {
    const projects = await this.projectsService.getAll();
    return {
      data: projects,
    };
  }

  @Get('/all/count')
  async getCount(): Promise<DataResponse<number>> {
    const count = await this.projectsService.getCount();
    return {
      data: count,
    };
  }
}
