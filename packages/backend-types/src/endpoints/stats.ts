import type { StackOfProject } from '@repo/prisma-model';

export type StackStatsRaw = {
  stack_tech_id: StackOfProject['stackTechId'];
  tech_count: number;
}[];
