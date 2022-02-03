/*
  Warnings:

  - You are about to drop the `projet_techno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `projet_techno` DROP FOREIGN KEY `projet_techno_id_projet_fkey`;

-- DropForeignKey
ALTER TABLE `projet_techno` DROP FOREIGN KEY `projet_techno_id_techno_fkey`;

-- DropTable
DROP TABLE `projet_techno`;

-- CreateTable
CREATE TABLE `_projetTotechno` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_projetTotechno_AB_unique`(`A`, `B`),
    INDEX `_projetTotechno_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_projetTotechno` ADD FOREIGN KEY (`A`) REFERENCES `projet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_projetTotechno` ADD FOREIGN KEY (`B`) REFERENCES `techno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
