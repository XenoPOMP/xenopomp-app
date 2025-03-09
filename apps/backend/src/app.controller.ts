import { Controller, Get } from '@nestjs/common';

import { SuccessfulResponse } from '@repo/backend-types';

import { AppService } from './app.service';

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
