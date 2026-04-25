-- CreateEnum
CREATE TYPE "TechStack" AS ENUM ('FULLSTACK', 'FRONTEND', 'BACKEND');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubRepo" TEXT NOT NULL,
    "liveLink" TEXT NOT NULL,
    "techStack" "TechStack" NOT NULL,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_userId_key" ON "projects"("userId");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
