/*
  Warnings:

  - You are about to drop the column `rating` on the `SiteReview` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `SiteReview` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SiteReview` table. All the data in the column will be lost.
  - Added the required column `description` to the `SiteReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteReview" DROP COLUMN "rating",
DROP COLUMN "review",
DROP COLUMN "updatedAt",
ADD COLUMN     "description" TEXT NOT NULL;
