import { Injectable } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';

// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../features/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCount(): Promise<number> {
    return this.prisma.project.count();
  }

  async getStackById(projectId: string): Promise<StackTech[]> {
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

  async getById(projectId: string): Promise<Project | null> {
    return this.prisma.project.findFirst({
      where: {
        id: projectId,
      },
    });
  }

  async getAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }
}
