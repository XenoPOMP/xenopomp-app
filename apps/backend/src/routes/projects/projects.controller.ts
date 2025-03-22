import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Param,
} from '@nestjs/common';

import {
  GetAllProjects,
  GetProjectById,
  GetProjectCount,
  GetSingleProjectStack,
} from '@repo/backend-types';
import { issueErrorCode } from '@repo/errors';

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

  @Endpoint('GET', '/single/:projectId')
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

  @Endpoint('PUT', '/single/:projectId', {
    authRequired: true,
    validate: true,
    permissions: {
      updateProjects: true,
    },
  })
  async updateOneProject(
    @Param('projectId') projectId: string,
    @Body() dto?: ProjectDto,
  ) {
    if (!dto) {
      throw new BadRequestException(issueErrorCode('PROJECT_UPDATE_FAILED'));
    }
    return this.projectsService.updateById(projectId, dto);
  }

  @Endpoint('DELETE', '/single/:projectId', {
    code: HttpStatus.NO_CONTENT,
    authRequired: true,
    permissions: {
      deleteProjects: true,
    },
  })
  async deleteOneProject(@Param('projectId') projectId: string) {
    try {
      await this.projectsService.deleteById(projectId);
    } catch (e) {
      throw new BadRequestException(issueErrorCode('ENOENT'));
    }
  }
}
