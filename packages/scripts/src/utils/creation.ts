import { existsSync, mkdirSync } from 'node:fs';

/** Synchronously creates directory and checks if it already exists. */
export const createDirSync: typeof mkdirSync = (path, options) => {
  if (existsSync(path)) {
    return;
  }

  return mkdirSync(path, options);
};
