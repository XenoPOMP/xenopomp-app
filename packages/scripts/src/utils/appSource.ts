import * as path from 'node:path';

/**
 * Returns source directory of lib.
 */
export const appSource = (): string => {
  return path.join(path.dirname(require.main?.filename ?? ''), '../');
};
