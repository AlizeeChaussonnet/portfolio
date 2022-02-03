/*
  Warnings:

  - The primary key for the `projet_techno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `projet_techno` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `projet_techno` DROP FOREIGN KEY `fk_projet`;

-- DropForeignKey
ALTER TABLE `projet_techno` DROP FOREIGN KEY `fk_techno`;

-- AlterTable
ALTER TABLE `projet_techno` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`id_techno`, `id_projet`);

-- AddForeignKey
ALTER TABLE `projet_techno` ADD CONSTRAINT `projet_techno_id_projet_fkey` FOREIGN KEY (`id_projet`) REFERENCES `projet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projet_techno` ADD CONSTRAINT `projet_techno_id_techno_fkey` FOREIGN KEY (`id_techno`) REFERENCES `techno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
