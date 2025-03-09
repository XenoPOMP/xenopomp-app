import { Project } from '@prisma/client';

import { Localized } from './locales';

/** Parsed project with resolved locales. */
export type LocalizedProject = Localized<Project, 'name' | 'desc'>;
