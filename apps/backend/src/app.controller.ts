import { Controller } from '@nestjs/common';

import type { DataResponse } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
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
