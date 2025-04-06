import type { GetProjectCount, GetTopStack } from '@repo/backend-types';

import { axiosClassic } from '@/api';
import type { ServiceType } from '@/services';

const STATS_KEY = 'stats';

export const StatsService = {
  getProjectCount: {
    queryKey: [STATS_KEY, 'project count'],
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: async () =>
      (await axiosClassic.get<GetProjectCount>('/stats/project-count')).data,
  },
  getTopStack: {
    queryKey: [STATS_KEY, 'top tech stack'],
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: async () =>
      (await axiosClassic.get<GetTopStack>('/stats/stack')).data,
  },
} satisfies ServiceType;
