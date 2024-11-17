-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "technologies" TEXT[],
    "goalSummary" TEXT NOT NULL,
    "goalDescription" TEXT NOT NULL,
    "features" TEXT[],
    "userExperience" TEXT,
    "images" TEXT[],
    "repo" TEXT,
    "demo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
