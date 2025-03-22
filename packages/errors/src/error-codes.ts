/**
 * Enum containing any type of error code that can
 * be passed through application.
 */
export const ERROR_CODES = {
  VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH:
    'VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH',
  VALIDATION_WRONG_PASSWORD: 'VALIDATION_WRONG_PASSWORD',
  VALIDATION_FAILED_IS_EMAIL: 'VALIDATION_FAILED_IS_EMAIL',

  AUTH_USER_EXISTENCE: 'AUTH_USER_EXISTENCE',
  UNAUTHORIZED: 'UNAUTHORIZED',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
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
