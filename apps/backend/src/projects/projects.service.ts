import { Injectable } from '@nestjs/common';
import type { Project, StackTech } from '@prisma/client';
import { pipe } from 'xenopomp-essentials';

import type { LocalizedProject } from '@repo/backend-types';

import { LocalizationService } from '../localization.service';
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

  async get(): Promise<LocalizedProject[]> {
    const projects = await this.prisma.project.findMany();

    const func = pipe((v: Project[]) =>
      v.map(({ name, desc, ...v }) => ({
        name: this.loc.parse(name),
        desc: this.loc.parse(desc),
        ...v,
      })),
    );

    return func(projects);
  }
}
