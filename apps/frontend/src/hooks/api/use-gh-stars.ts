import { useQuery } from '@tanstack/react-query';

import { StatsService } from '@/services';

// eslint-disable-next-line jsdoc/require-jsdoc
export const useGhStars = () => {
  return useQuery({
    ...StatsService.getStars,
  });
};
