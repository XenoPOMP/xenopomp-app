import { Controller, Get } from '@nestjs/common';

import type { SuccessfulResponse } from '@repo/backend-types';

// eslint-disable-next-line ts/consistent-type-imports
import { AppService } from '~/app';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): SuccessfulResponse<string> {
    return {
      data: 'ok',
    };
  }
}
