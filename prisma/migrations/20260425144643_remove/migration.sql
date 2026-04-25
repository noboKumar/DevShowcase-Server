/*
  Warnings:

  - The `techStack` column on the `projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "techStack",
ADD COLUMN     "techStack" TEXT[],
ALTER COLUMN "thumbnail" DROP NOT NULL;

-- DropEnum
DROP TYPE "TechStack";
