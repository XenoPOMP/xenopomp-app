import { Project } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class ProjectDto implements Partial<Pick<Project, 'name' | 'desc'>> {
  @IsOptional()
  @IsString({ message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE') })
  name?: string;

  @IsOptional()
  @IsString({ message: issueErrorCode('VALIDATION_WRONG_DATA_TYPE') })
  desc?: string;
}
