/*
  Warnings:

  - You are about to drop the column `id_projet` on the `techno` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `techno` DROP FOREIGN KEY `fk_projet_techno`;

-- AlterTable
ALTER TABLE `projet` ADD COLUMN `github` VARCHAR(500) NULL,
    MODIFY `name` VARCHAR(255) NULL,
    MODIFY `picture` VARCHAR(500) NULL,
    MODIFY `link` VARCHAR(500) NULL,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `explanation` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `techno` DROP COLUMN `id_projet`;

-- CreateTable
CREATE TABLE `projet_techno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_techno` INTEGER NOT NULL,
    `id_projet` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projet_techno` ADD CONSTRAINT `fk_projet_techno` FOREIGN KEY (`id_projet`) REFERENCES `projet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
