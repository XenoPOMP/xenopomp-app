import type { StackOfProject, StackTech, StackType } from '@repo/prisma-model';

export type StackStatsRaw = {
  stack_tech_id: StackOfProject['stackTechId'];
  tech_count: number;
  tech_type: StackType;
  tech_icon_name: StackTech['iconName'];
  tech_name: StackTech['name'];
}[];
