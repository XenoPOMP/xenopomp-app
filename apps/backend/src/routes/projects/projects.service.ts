import { Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';

import {
  AllProjects,
  CreateProject,
  ProjectById,
  ProjectCount,
  SingleProjectStack,
} from '@repo/backend-types';

import { PrismaService } from '../../features';

import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCount(): Promise<ProjectCount> {
    return this.prisma.project.count();
  }

  async getStackById(projectId: string): Promise<SingleProjectStack> {
    const manyToMany = await this.prisma.stackOfProject.findMany({
      where: {
        projectId,
      },
      include: {
        stackTech: true,
      },
    });

    return manyToMany.map(v => v.stackTech);
  }

  async getById(projectId: string): Promise<ProjectById> {
    return this.prisma.project.findFirst({
      where: {
        id: projectId,
      },
    });
  }

  async getAll(): Promise<AllProjects> {
    return this.prisma.project.findMany();
  }

  async create(dto: ProjectDto): Promise<CreateProject> {
    return this.prisma.project.create({
      data: dto,
    });
  }

  async updateById(
    projectId: Project['id'],
    dto: ProjectDto,
  ): Promise<CreateProject> {
    return this.prisma.project.update({
      where: {
        id: projectId,
      },
      data: dto,
    });
  }

  async deleteById(projectId: Project['id']) {
    await this.prisma.project.deleteMany({
      where: {
        id: projectId,
      },
    });
  }
}
