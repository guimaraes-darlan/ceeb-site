/*
  Warnings:

  - You are about to drop the column `name_diacritics` on the `categories` table. All the data in the column will be lost.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "name" SET DATA TYPE CITEXT,
ALTER COLUMN "author" SET DATA TYPE CITEXT;

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name_diacritics",
ADD COLUMN     "quantity" INTEGER,
ALTER COLUMN "name" SET DATA TYPE CITEXT,
ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "readers" ALTER COLUMN "name" SET DATA TYPE CITEXT;

-- AlterTable
ALTER TABLE "speakers" ALTER COLUMN "name" SET DATA TYPE CITEXT,
ALTER COLUMN "house" SET DATA TYPE CITEXT;
