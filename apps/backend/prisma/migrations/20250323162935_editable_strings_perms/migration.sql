/*
  Warnings:

  - The values [editAboutMe] on the enum `Permissions` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Permissions_new" AS ENUM ('all', 'editStrings', 'createProjects', 'updateProjects', 'deleteProjects');
ALTER TABLE "user_role" ALTER COLUMN "permissions" DROP DEFAULT;
ALTER TABLE "user_role" ALTER COLUMN "permissions" TYPE "Permissions_new"[] USING ("permissions"::text::"Permissions_new"[]);
ALTER TYPE "Permissions" RENAME TO "Permissions_old";
ALTER TYPE "Permissions_new" RENAME TO "Permissions";
DROP TYPE "Permissions_old";
ALTER TABLE "user_role" ALTER COLUMN "permissions" SET DEFAULT ARRAY[]::"Permissions"[];
COMMIT;
