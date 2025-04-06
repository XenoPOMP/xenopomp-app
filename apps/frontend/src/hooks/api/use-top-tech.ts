'use client';

import { useQuery } from '@tanstack/react-query';

import { StatsService } from '@/services';

// eslint-disable-next-line jsdoc/require-jsdoc
export const useTopTech = () => {
  return useQuery({
    ...StatsService.getTopStack,
  });
};
