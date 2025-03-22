import { Controller } from '@nestjs/common';

import { DataResponse } from '@repo/backend-types';

import { AppService } from './app.service';
import { Endpoint } from './decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Endpoint('GET')
  getHello(): DataResponse<string> {
    return {
      data: 'ok',
    };
  }
}
