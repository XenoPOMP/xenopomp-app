import { Project } from '@prisma/client';

import { Localized } from './locales';

type Stack = {};

/** Parsed project with resolved locales. */
export type LocalizedProject = Localized<Project, 'name' | 'desc'> & Stack;
