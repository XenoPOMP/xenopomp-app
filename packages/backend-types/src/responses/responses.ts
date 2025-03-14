/** Map unified backend response. */
export type UnifiedResponse<N extends string, T> = Record<N, T>;

/** Unified interface for all successful responses. */
export type DataResponse<T> = UnifiedResponse<'data', T>;
