import { writeFile } from 'node:fs/promises';
// @ts-expect-error Just a script...
import path from 'node:path';
import { cwd } from 'node:process';
import { PackageJson } from 'type-fest';

// Constants
const LIB_NAME = '@repo/prisma-model';
const PATH_TO_OUTPUT = '../../packages/prisma-model';

(async () => {
  /** Source directory for library. */
  const libSrcDir = path.join(cwd(), PATH_TO_OUTPUT);

  /** Package.json from library folder. */
  const packageJson: PackageJson = require(
    path.join(libSrcDir, 'package.json'),
  );

  /** Setup package data. */
  packageJson.name = LIB_NAME;

  // Update file
  await writeFile(
    path.join(libSrcDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );
})();
