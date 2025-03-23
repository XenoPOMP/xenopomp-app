import { createEnum } from './enum';

/**
 * Enum containing any type of error code that can
 * be passed through application.
 */
export const ERROR_CODES = createEnum(
  // Email validation
  'EMAIL_IS_INVALID',

  // Password validation
  'PASSWORD_IS_NOT_A_STRING',
  'PASSWORD_MIN_LENGTH',
  'PASSWORD_MAX_LENGTH',

  // Auth
  'UNAUTHORIZED',
  'USER_ALREADY_EXISTS',
  'USER_DOES_NOT_EXIST',

  // Update project
  'PROJECT_UPDATE_WRONG_BODY',
  'PROJECT_DOES_NOT_EXIST',
  'PROJECT_NAME_IS_NOT_A_STRING',
  'PROJECT_DESC_IS_NOT_A_STRING',

  // Editable string
  'EDITABLE_STRING_NAME_SHOULD_BE_STRING',
  'EDITABLE_STRING_VALUE_SHOULD_BE_STRING',
);

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
