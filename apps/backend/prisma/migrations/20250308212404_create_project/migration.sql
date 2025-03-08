-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" JSONB,
    "desc" JSONB,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
