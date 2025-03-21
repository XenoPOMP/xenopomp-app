import { Controller, Param } from '@nestjs/common';

import type {
  GetAllProjects,
  GetProjectById,
  GetProjectCount,
  GetSingleProjectStack,
} from '@repo/backend-types';

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
  ): Promise<GetSingleProjectStack> {
    return handleData(await this.projectsService.getStackById(projectId));
  }

  @Endpoint('GET', '/single/:projectId/get')
  async getById(
    @Param('projectId') projectId: string,
  ): Promise<GetProjectById> {
    return handleData(await this.projectsService.getById(projectId));
  }

  @Endpoint('GET', '/all')
  async get(): Promise<GetAllProjects> {
    return handleData(await this.projectsService.getAll());
  }

  @Endpoint('GET', '/all/count')
  async getCount(): Promise<GetProjectCount> {
    return handleData(await this.projectsService.getCount());
  }
}
