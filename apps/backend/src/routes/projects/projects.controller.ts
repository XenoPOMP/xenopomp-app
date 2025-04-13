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
  GetSingleProjectStack,
} from '@repo/backend-types';
import { CreateProjectRes } from '@repo/backend-types/src';
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

  @Endpoint('POST', '/single/create', {
    code: HttpStatus.CREATED,
    validate: true,
    authRequired: true,
    permissions: {
      createProjects: true,
    },
  })
  async createOne(@Body() dto: ProjectDto): Promise<CreateProjectRes> {
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
  ): Promise<CreateProjectRes> {
    if (!dto) {
      throw new BadRequestException(
        issueErrorCode('PROJECT_UPDATE_WRONG_BODY'),
      );
    }
    return handleData(await this.projectsService.updateById(projectId, dto));
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
    } catch {
      throw new BadRequestException(issueErrorCode('PROJECT_DOES_NOT_EXIST'));
    }
  }
}
