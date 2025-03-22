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

export function issueErrorCode(code: keyof typeof ERROR_CODES) {
  return `ERR${code}`;
}
