/*
  Warnings:

  - Added the required column `pass` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `pass` VARCHAR(191) NOT NULL;
