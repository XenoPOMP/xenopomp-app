import { Injectable } from '@nestjs/common';
import { StackType } from '@prisma/client';

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
            LEFT JOIN stack_tech
                ON stack_tech.id = stack_tech_id
        WHERE stack_tech.type = 'frontend'
        GROUP BY stack_tech_id
        ORDER BY tech_count DESC
    `;
  }
}
