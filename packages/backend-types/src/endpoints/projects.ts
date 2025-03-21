import type { Project, StackTech } from '@prisma/client';
import type { Nullable } from 'xenopomp-essentials';

import type { DataResponse } from '../responses';

export type SingleProjectStack = StackTech[];
export type GetSingleProjectStack = DataResponse<SingleProjectStack>;

export type ProjectById = Nullable<Project>;
export type GetProjectById = DataResponse<ProjectById>;

export type AllProjects = Project[];
export type GetAllProjects = DataResponse<AllProjects>;

export type ProjectCount = number;
export type GetProjectCount = DataResponse<number>;
