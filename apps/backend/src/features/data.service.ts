import { Injectable } from '@nestjs/common';

import type { BackendResponse } from '@repo/backend-types';

@Injectable()
export class DataService {
  /**
   * Executes promise and returns proper response for route. Use only in controllers!
   * @param callback
   */
  async run<T>(callback: () => Promise<T>): Promise<BackendResponse<T>> {
    try {
      const data = await callback();
      return {
        data,
      };
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
