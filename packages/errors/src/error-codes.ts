/**
 * Enum containing any type of error code that can
 * be passed through application.
 */
export const ERROR_CODES = {
  VALIDATION_WRONG_PASSWORD: 'VALIDATION_WRONG_PASSWORD',
  VALIDATION_WRONG_DATA_TYPE: 'VALIDATION_WRONG_DATA_TYPE',
  VALIDATION_MIN_LENGTH: 'VALIDATION_MIN_LENGTH',
  AUTH_USER_EXISTENCE: 'AUTH_USER_EXISTENCE',
  UNAUTHORIZED: 'UNAUTHORIZED',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
  ENOENT: 'ENOENT',
  PROJECT_UPDATE_FAILED: 'PROJECT_UPDATE_FAILED',
} as const;

export type IssuedErrorCode<
  K extends keyof typeof ERROR_CODES = keyof typeof ERROR_CODES,
> = `${(typeof ERROR_CODES)[K]}`;

/**
 * Wrapps error code for
 * @param code
 */
export function issueErrorCode<K extends keyof typeof ERROR_CODES>(
  code: K,
): IssuedErrorCode<K> {
  return `${ERROR_CODES[code]}`;
}
