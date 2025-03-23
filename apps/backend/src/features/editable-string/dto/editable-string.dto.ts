import { IsOptional, IsString } from 'class-validator';

import { issueErrorCode } from '@repo/errors';

export class EditableStringFetchDto {
  @IsString({
    message: issueErrorCode('EDITABLE_STRING_NAME_SHOULD_BE_STRING'),
  })
  name: string;
}

export class EditableStringDto {
  @IsString({
    message: issueErrorCode('EDITABLE_STRING_NAME_SHOULD_BE_STRING'),
  })
  name: string;

  @IsOptional()
  @IsString({
    message: issueErrorCode('EDITABLE_STRING_VALUE_SHOULD_BE_STRING'),
  })
  value?: string;
}
