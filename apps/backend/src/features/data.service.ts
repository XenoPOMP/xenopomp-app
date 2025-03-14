import type { DataResponse } from '@repo/backend-types';

/**
 * Executes promise and returns proper response for route. Use only in controllers!
 * @param data
 */
export async function handleData<T>(data: T): Promise<DataResponse<T>> {
  return {
    data,
  };
}
