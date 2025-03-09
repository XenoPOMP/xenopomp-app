-- CreateTable
CREATE TABLE "StackOfProject" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "stack_tech_id" TEXT NOT NULL,

    CONSTRAINT "StackOfProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StackOfProject" ADD CONSTRAINT "StackOfProject_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StackOfProject" ADD CONSTRAINT "StackOfProject_stack_tech_id_fkey" FOREIGN KEY ("stack_tech_id") REFERENCES "StackTech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
