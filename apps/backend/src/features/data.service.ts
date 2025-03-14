import type { SuccessfulResponse } from '@repo/backend-types';

/**
 * Executes promise and returns proper response for route. Use only in controllers!
 * @param data
 */
export async function handleData<T>(data: T): Promise<SuccessfulResponse<T>> {
  return {
    data,
  };
}
