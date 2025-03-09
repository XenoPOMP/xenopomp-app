/*
  Warnings:

  - The values [backendh] on the enum `StackType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StackType_new" AS ENUM ('frontend', 'backend');
ALTER TABLE "StackTech" ALTER COLUMN "type" TYPE "StackType_new" USING ("type"::text::"StackType_new");
ALTER TYPE "StackType" RENAME TO "StackType_old";
ALTER TYPE "StackType_new" RENAME TO "StackType";
DROP TYPE "StackType_old";
COMMIT;
