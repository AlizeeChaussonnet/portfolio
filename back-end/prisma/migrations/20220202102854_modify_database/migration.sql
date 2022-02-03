/*
  Warnings:

  - You are about to drop the column `id_technos` on the `techno` table. All the data in the column will be lost.
  - Added the required column `id_projet` to the `techno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `techno` DROP FOREIGN KEY `fk_projet_techno`;

-- AlterTable
ALTER TABLE `techno` DROP COLUMN `id_technos`,
    ADD COLUMN `id_projet` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `fk_projet_techno` ON `techno`(`id_projet`);

-- AddForeignKey
ALTER TABLE `techno` ADD CONSTRAINT `fk_projet_techno` FOREIGN KEY (`id_projet`) REFERENCES `projet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
