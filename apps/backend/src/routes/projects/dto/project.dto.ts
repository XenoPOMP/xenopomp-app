import { Project } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class ProjectDto implements Partial<Pick<Project, 'name' | 'desc'>> {
  @IsOptional()
  @IsString({ message: issueErrorCode('PROJECT_NAME_IS_NOT_A_STRING') })
  name?: string;

  @IsOptional()
  @IsString({ message: issueErrorCode('PROJECT_DESC_IS_NOT_A_STRING') })
  desc?: string;
}
