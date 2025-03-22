import { Body, Controller, HttpStatus, Param } from '@nestjs/common';

import {
  GetAllProjects,
  GetProjectById,
  GetProjectCount,
  GetSingleProjectStack,
} from '@repo/backend-types';

import { Endpoint } from '../../decorators';
import { handleData } from '../../features';

import { ProjectDto } from './dto';
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

  @Endpoint('POST', '/single/create', {
    code: HttpStatus.CREATED,
    validate: true,
    authRequired: true,
    permissions: {
      createProjects: true,
    },
  })
  async createOne(@Body() dto: ProjectDto) {
    return handleData(await this.projectsService.create(dto));
  }

  @Endpoint('DELETE', '/single/:projectId/delete', {
    code: HttpStatus.NO_CONTENT,
    authRequired: true,
    permissions: {
      deleteProjects: true,
    },
  })
  async deleteOneProject(@Param('projectId') projectId: string) {
    await this.projectsService.deleteById(projectId);
  }
}
