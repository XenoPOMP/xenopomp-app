import { Controller, Param } from '@nestjs/common';

import { Endpoint } from '../../decorators';

import { EditableStringService } from './editable-string.service';

@Controller('strings')
export class EditableStringController {
  constructor(private readonly editableStringService: EditableStringService) {}

  @Endpoint('GET', '/:stringName')
  async getOne(@Param('stringName') stringName: string) {
    return this.editableStringService.getByName({
      name: stringName,
    });
  }
}
