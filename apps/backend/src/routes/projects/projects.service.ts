import { Injectable } from '@nestjs/common';

import type {
  AllProjects,
  ProjectById,
  ProjectCount,
  SingleProjectStack,
} from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../../features';

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
}
