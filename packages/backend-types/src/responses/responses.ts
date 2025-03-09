/** Map unified backend response. */
export type UnifiedResponse<N extends string, T> = Record<N, T>;

/** Unified interface for all successful responses. */
export type SuccessfulResponse<T> = UnifiedResponse<'data', T>;

/** Unified interface for all error responses. */
export type ErrorResponse<T> = UnifiedResponse<'error', T>;
