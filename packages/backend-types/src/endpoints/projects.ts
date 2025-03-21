import type { StackTech } from '@prisma/client';

import type { DataResponse } from '../responses';

export type SingleProjectStack = StackTech[];
export type GetSingleProjectStack = DataResponse<SingleProjectStack>;
