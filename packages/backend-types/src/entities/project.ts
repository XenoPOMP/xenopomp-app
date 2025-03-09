import type { Project } from '@prisma/client';

import type { Localized } from './locales';

interface Stack {}

/** Parsed project with resolved locales. */
export type LocalizedProject = Localized<Project, 'name' | 'desc'> & Stack;
