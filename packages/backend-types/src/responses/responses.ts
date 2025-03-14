/** Map unified backend response. */
export type UnifiedResponse<N extends string, T> = Record<N, T>;

/** Unified interface for all successful responses. */
export type SuccessfulResponse<T> = UnifiedResponse<'data', T>;

/** Unified interface for all error responses. */
export type ErrorResponse<T> = UnifiedResponse<'error', T>;

/** The response of route that can throw or not. */
export type BackendResponse<T> = SuccessfulResponse<T> | ErrorResponse<T>;

/**
 * Checks if backend response is successful one.
 * @param res
 */
export function isSuccessful<T>(
  res: BackendResponse<T>,
): res is SuccessfulResponse<T> {
  const keys = Object.keys(res);
  return keys.length === 1 && keys?.at(0) === 'data';
}

/**
 * Checks if backend response is successful one.
 * @param res
 */
export function isError<T>(res: BackendResponse<T>): res is ErrorResponse<T> {
  const keys = Object.keys(res);
  return keys.length === 1 && keys?.at(0) === 'error';
}

interface HandleOptions<T> {
  onSuccess?: (res: SuccessfulResponse<T>) => void;
  onError?: (res: ErrorResponse<T>) => void;
}

/**
 * Run type checks on response and executes proper
 * callback.
 *
 * @param res
 * @param options
 *
 * @example
 * const res: BackendResponse<string> = {
 *   data: '',
 * };
 *
 * handleBackendResponse(res, {
 *   onSuccess: res => console.log(res.data),
 *   onError: res => console.error(res.error),
 * });
 */
export function handleBackendResponse<T>(
  res: BackendResponse<T>,
  options?: HandleOptions<T>,
) {
  if (isSuccessful(res)) {
    options?.onSuccess?.(res);
  }

  if (isError(res)) {
    options?.onError?.(res);
  }
}
