import { Body, Controller, Param } from '@nestjs/common';

import { Endpoint } from '../../decorators';
import { handleData } from '../data.service';

import { EditableStringDto } from './dto';
import { EditableStringService } from './editable-string.service';

@Controller('strings')
export class EditableStringController {
  constructor(private readonly editableStringService: EditableStringService) {}

  @Endpoint('GET', '/:stringName')
  async getOne(@Param('stringName') stringName: string) {
    return handleData(
      await this.editableStringService.getByName({
        name: stringName,
      }),
    );
  }

  @Endpoint('PUT', '/', {
    validate: true,
    authRequired: true,
    permissions: {
      editStrings: true,
    },
  })
  async updateOne(@Body() dto: EditableStringDto) {
    return handleData(await this.editableStringService.updateByName(dto));
  }

  @Endpoint('POST', '/', {
    validate: true,
    authRequired: true,
    permissions: {
      editStrings: true,
    },
  })
  async createOne(@Body() dto: EditableStringDto) {
    return handleData(await this.editableStringService.createNew(dto));
  }
}
