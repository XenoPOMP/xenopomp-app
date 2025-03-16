import { Controller, Param } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';

import type { DataResponse } from '@repo/backend-types';

import { Endpoint } from '../../decorators';
import { handleData } from '../../features';

// eslint-disable-next-line ts/consistent-type-imports
import { ProjectsService } from './projects.service';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Endpoint('GET', '/single/:projectId/stack')
  async getStack(
    @Param('projectId') projectId: string,
  ): Promise<DataResponse<StackTech[]>> {
    return handleData(await this.projectsService.getStackById(projectId));
  }

  @Endpoint('GET', '/single/:projectId/get')
  async getById(
    @Param('projectId') projectId: string,
  ): Promise<DataResponse<Project | null>> {
    return handleData(await this.projectsService.getById(projectId));
  }

  @Endpoint('GET', '/all')
  async get(): Promise<DataResponse<Project[]>> {
    return handleData(await this.projectsService.getAll());
  }

  @Endpoint('GET', '/all/count')
  async getCount(): Promise<DataResponse<number>> {
    return handleData(await this.projectsService.getCount());
  }
}
