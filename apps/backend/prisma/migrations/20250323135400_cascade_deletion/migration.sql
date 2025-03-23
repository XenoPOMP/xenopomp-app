-- DropForeignKey
ALTER TABLE "stack_of_project" DROP CONSTRAINT "stack_of_project_project_id_fkey";

-- DropForeignKey
ALTER TABLE "stack_of_project" DROP CONSTRAINT "stack_of_project_stack_tech_id_fkey";

-- AddForeignKey
ALTER TABLE "stack_of_project" ADD CONSTRAINT "stack_of_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stack_of_project" ADD CONSTRAINT "stack_of_project_stack_tech_id_fkey" FOREIGN KEY ("stack_tech_id") REFERENCES "stack_tech"("id") ON DELETE CASCADE ON UPDATE CASCADE;
