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

    return this.prepareProject(query);
  }

  async getAll(): Promise<LocalizedProject[]> {
    const query = await this.prisma.project.findMany();
    const prepared: LocalizedProject[] = [];

    for (const proj of query) {
      const prep = await this.prepareProject(proj);
      prepared.push(prep);
    }

    return prepared;
  }

  /**
   * Localizes project and fetches stack techs ids.
   * @param project
   * @private
   */
  private async prepareProject(project: Project): Promise<LocalizedProject> {
    const localized = this.loc.parseObj(project, ['name', 'desc']);

    const { id, ...v } = localized;
    const stack = (await this.getStackById(id)).map(v => v.id);
    return { id, stackIds: stack, ...v };
  }
}
