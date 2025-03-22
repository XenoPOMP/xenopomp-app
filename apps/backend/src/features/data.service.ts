import { DataResponse } from '@repo/backend-types';

/**
 * Wraps data as proper response structure.
 * @param data
 */
export function handleData<T>(data: T): DataResponse<T> {
  return {
    data,
  };
}
