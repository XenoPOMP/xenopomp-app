'use client';

import { useQuery } from '@tanstack/react-query';

import { ProjectsService } from '@/services';

// eslint-disable-next-line jsdoc/require-jsdoc
export const useAllProjects = () => {
  return useQuery({
    ...ProjectsService.getAll,
  });
};
