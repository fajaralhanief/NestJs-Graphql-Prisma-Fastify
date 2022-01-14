/*
  Warnings:

  - You are about to drop the column `post` on the `post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `post`,
    ADD COLUMN `authorId` INTEGER NULL,
    ADD COLUMN `content` VARCHAR(191) NULL,
    ADD COLUMN `published` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_PostToPostCategory` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PostToPostCategory_AB_unique`(`A`, `B`),
    INDEX `_PostToPostCategory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToPostCategory` ADD FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToPostCategory` ADD FOREIGN KEY (`B`) REFERENCES `PostCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
