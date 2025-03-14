import { Controller, Get } from '@nestjs/common';

import type { DataResponse } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataResponse<string> {
    return {
      data: 'ok',
    };
  }
}
