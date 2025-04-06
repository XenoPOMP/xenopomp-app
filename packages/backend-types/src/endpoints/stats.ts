import type { StackOfProject, StackTech, StackType } from '@repo/prisma-model';

import type { DataResponse } from '../responses';

export type StackStatsRaw = {
  stack_tech_id: StackOfProject['stackTechId'];
  tech_count: number;
  tech_type: StackType;
  tech_icon_name: StackTech['iconName'];
  tech_name: StackTech['name'];
}[];

export type PreparedStackList = Array<
  Pick<StackTech, 'type' | 'iconName' | 'name'>
>;

export type GetTopStack = DataResponse<
  Record<'frontend' | 'backend', PreparedStackList>
>;

export interface FetchedGHStars {
  items?: {
    url?: string;
    repoName?: string;
    starsCount?: number;
    ownerName?: string;
  }[];
}

export type GetGHStars = DataResponse<FetchedGHStars>;
