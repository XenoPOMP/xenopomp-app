import { Project } from '@prisma/client';
import { IsString } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class ProjectDto implements Partial<Pick<Project, 'name' | 'desc'>> {
  @IsString({ message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE') })
  name?: string;

  @IsString({ message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE') })
  desc?: string;
}
