import type { UserType } from '@repo/prisma-model';

import type { DataResponse } from '../responses';

export type FetchUserType = UserType;
export type GetUserType = DataResponse<FetchUserType>;
