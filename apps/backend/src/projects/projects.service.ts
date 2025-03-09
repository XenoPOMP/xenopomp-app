import { Injectable } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';
import { pipe } from 'xenopomp-essentials';

import type { Localized, LocalizedProject } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { LocalizationService } from '../localization.service';
// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly loc: LocalizationService,
  ) {}

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

  async getById(projectId: string): Promise<LocalizedProject | null> {
    const query = await this.prisma.project.findFirst({
      where: {
        id: projectId,
      },
    });

    if (query === null) {
      return null;
    }

    const func = pipe(this.localizeProject).pipe(this.fetchStack);
    return func(query);
  }

  async getAll(): Promise<LocalizedProject[]> {
    const query = await this.prisma.project.findMany();

    const func = pipe((v: Project[]) => v.map(this.localizeProject)).pipe(
      async _v => Promise.all(_v.map(this.fetchStack)),
    );

    return func(query);
  }

  private localizeProject(project: Project) {
    return this.loc.parseObj(project, ['name', 'desc']);
  }

  private async fetchStack(
    project: Localized<Project, 'name' | 'desc'>,
  ): Promise<LocalizedProject> {
    const { id, ...v } = project;
    const stack = (await this.getStackById(id)).map(v => v.id);
    return { id, stackIds: stack, ...v };
  }
}
