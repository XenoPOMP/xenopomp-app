/**
 * Enum containing any type of error code that can
 * be passed through application.
 *
 * 1xx - validation errors
 * 2xx - auth errors
 */
export enum ERROR_CODES {
  VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH = 100,
  VALIDATION_FAILED_IS_EMAIL,

  AUTH_USER_EXISTENCE = 200,
  UNAUTHORIZED,
  INVALID_REFRESH_TOKEN,
  USER_ALREADY_EXISTS,
}

export type IssuedErrorCode<
  K extends keyof typeof ERROR_CODES = keyof typeof ERROR_CODES,
> = `ERR${(typeof ERROR_CODES)[K]}`;

/**
 * Wrapps error code for
 * @param code
 */
export function issueErrorCode<K extends keyof typeof ERROR_CODES>(
  code: K,
): IssuedErrorCode<K> {
  return `ERR${ERROR_CODES[code]}`;
}
