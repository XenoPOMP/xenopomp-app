/*
  Warnings:

  - You are about to drop the column `login` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nick_name` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_login_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "login",
DROP COLUMN "nick_name",
ADD COLUMN     "name" TEXT;
