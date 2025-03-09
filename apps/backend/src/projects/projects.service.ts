import { Injectable } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';
import { pipe } from 'xenopomp-essentials';

import type { LocalizedProject } from '@repo/backend-types';

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

  async get(
    method: keyof Pick<typeof this.prisma.project, 'findMany'> = 'findMany',
    ...params: Parameters<typeof this.prisma.project.findMany>
  ): Promise<LocalizedProject[]> {
    const projects = await this.prisma.project[method](...params);

    const func = pipe((v: Project[]) =>
      v.map(proj => this.loc.parseObj(proj, ['name', 'desc'])),
    ).pipe(async _v =>
      Promise.all(
        _v.map(async ({ id, ...v }) => {
          const stack = (await this.getStackById(id)).map(v => v.id);
          return { id, stackIds: stack, ...v };
        }),
      ),
    );

    return func(projects);
  }
}
