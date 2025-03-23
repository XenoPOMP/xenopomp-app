import { Injectable, Logger } from '@nestjs/common';
import { StackTech } from '@prisma/client';
import axios from 'axios';

import { StackStatsRaw } from '@repo/backend-types';

import { PrismaService } from '../../features';

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  TAKE_STACK_ENTRIES = '5';

  /** Map calculated entries to camel case. */
  private prepareStackList(
    list: StackStatsRaw,
  ): Array<Pick<StackTech, 'type' | 'iconName' | 'name'>> {
    return list.map(({ tech_type, tech_icon_name, tech_name }) => ({
      type: tech_type,
      iconName: tech_icon_name,
      name: tech_name,
    }));
  }

  /**
   * This method sorts stack techs by usage in projects and
   * returns most-used front-end and back-end stack technologies.
   * @param options
   */
  async calculateTopStack(options?: { take?: string }) {
    const take: number = Number(options?.take ?? this.TAKE_STACK_ENTRIES);

    const frontend = await this.prisma.$queryRaw<StackStatsRaw>`
        SELECT
            stack_tech_id,
            COUNT(stack_tech_id) as tech_count,
            stack_tech.type as tech_type,
            stack_tech.icon_name as tech_icon_name,
            stack_tech.name as tech_name
        FROM stack_of_project
                 LEFT JOIN stack_tech
                           ON stack_tech.id = stack_tech_id
        WHERE stack_tech.type = 'frontend'
        GROUP BY
            stack_tech_id,
            stack_tech.type,
            stack_tech.icon_name,
            stack_tech.name
        ORDER BY tech_count DESC
            LIMIT ${take}
    `;

    const backend = await this.prisma.$queryRaw<StackStatsRaw>`
        SELECT
            stack_tech_id,
            COUNT(stack_tech_id) as tech_count,
            stack_tech.type as tech_type,
            stack_tech.icon_name as tech_icon_name,
            stack_tech.name as tech_name
        FROM stack_of_project
                 LEFT JOIN stack_tech
                           ON stack_tech.id = stack_tech_id
        WHERE stack_tech.type = 'backend'
        GROUP BY
            stack_tech_id,
            stack_tech.type,
            stack_tech.icon_name,
            stack_tech.name
        ORDER BY tech_count DESC
            LIMIT ${take}
    `;

    const preparedFrontend = this.prepareStackList(frontend);
    const preparedBackend = this.prepareStackList(backend);

    return {
      frontend: preparedFrontend,
      backend: preparedBackend,
    };
  }

  /**
   * Fetches most starred repos on XenoPOMP`s page.
   */
  async stars() {
    const url =
      'https://api.github.com/search/repositories?q=org:XenoPOMP&sort=stars&order=desc';

    const fetchedStars = await axios.get(url);

    Logger.log(fetchedStars);
  }
}
