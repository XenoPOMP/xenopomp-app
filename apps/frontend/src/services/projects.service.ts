'use client';

import type { GetAllProjects } from '@repo/backend-types';

import { axiosClassic } from '@/api';
import type { ServiceType } from '@/services';

export const ProjectsService = {
  getAll: {
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: async () =>
      (await axiosClassic.get<GetAllProjects>('/project/all')).data,
    queryKey: ['projects'],
  },
} satisfies ServiceType;
