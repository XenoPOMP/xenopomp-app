/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StackOfProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StackTech` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StackOfProject" DROP CONSTRAINT "StackOfProject_project_id_fkey";

-- DropForeignKey
ALTER TABLE "StackOfProject" DROP CONSTRAINT "StackOfProject_stack_tech_id_fkey";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "StackOfProject";

-- DropTable
DROP TABLE "StackTech";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" JSONB,
    "desc" JSONB,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stack_of_project" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "stack_tech_id" TEXT NOT NULL,

    CONSTRAINT "stack_of_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stack_tech" (
    "id" TEXT NOT NULL,
    "type" "StackType" NOT NULL,
    "icon_name" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "stack_tech_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "stack_of_project" ADD CONSTRAINT "stack_of_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stack_of_project" ADD CONSTRAINT "stack_of_project_stack_tech_id_fkey" FOREIGN KEY ("stack_tech_id") REFERENCES "stack_tech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
