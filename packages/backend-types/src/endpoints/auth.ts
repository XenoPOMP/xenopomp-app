import type { StrictOmit } from 'xenopomp-essentials';

import type { User } from '@repo/prisma-model';

import type { DataResponse } from '../responses';

export type IssueTokens = Record<'accessToken' | 'refreshToken', string>;

export type SanitizedUser = StrictOmit<User, 'password'>;

export type LoginResult = {
  user: SanitizedUser;
} & IssueTokens;
export type LoginResultRes = DataResponse<
  StrictOmit<LoginResult, 'refreshToken'>
>;

export type LogoutResultRes = DataResponse<{ logout: boolean }>;
