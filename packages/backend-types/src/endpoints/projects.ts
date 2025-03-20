import { StackTech } from '@prisma/client';

import { DataResponse } from '../responses';

export type SingleProjectStack = StackTech[];
export type GetSingleProjectStack = DataResponse<SingleProjectStack>;
