-- CreateEnum
CREATE TYPE "StackType" AS ENUM ('frontend', 'backendh');

-- CreateTable
CREATE TABLE "StackTech" (
    "id" TEXT NOT NULL,
    "type" "StackType" NOT NULL,
    "icon_name" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "StackTech_pkey" PRIMARY KEY ("id")
);
