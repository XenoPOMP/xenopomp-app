import { Injectable, Logger } from '@nestjs/common';

import { StackStatsRaw } from '@repo/backend-types';

import { PrismaService } from '../../features';

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateTopStack() {
    const query = await this.prisma.$queryRaw<StackStatsRaw>`
      SELECT stack_tech_id,
             COUNT(stack_tech_id) as tech_count
      FROM stack_of_project
      GROUP BY stack_tech_id
    `;

    Logger.log(query);
  }
}
