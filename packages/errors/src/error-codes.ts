/**
 * Enum containing any type of error code that can
 * be passed through application.
 *
 * 1xx - validation errors
 */
export enum ERROR_CODES {
  VALIDATION_FAILED = 100,
  VALIDATION_FAILED_ON_PASSWORD_MIN_LENGTH,
  VALIDATION_FAILED_IS_EMAIL,
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
