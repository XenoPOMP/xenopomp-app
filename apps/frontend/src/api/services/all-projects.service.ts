import type { GetAllProjects } from '@repo/backend-types';

import { ServiceBuilder, axiosClassic } from '@/api';

export const AllProjectsService = new ServiceBuilder({})
  .func('getAllProjects', {
    // eslint-disable-next-line jsdoc/require-jsdoc
    fn: async () =>
      (await axiosClassic.get<GetAllProjects>('/project/all')).data,
    queryKey: ['projects'],
  })
  .build();
