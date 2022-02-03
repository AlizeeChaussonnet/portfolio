-- DropForeignKey
ALTER TABLE `projet_techno` DROP FOREIGN KEY `fk_projet_techno`;

-- AddForeignKey
ALTER TABLE `projet_techno` ADD CONSTRAINT `fk_projet` FOREIGN KEY (`id_projet`) REFERENCES `projet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `projet_techno` ADD CONSTRAINT `fk_techno` FOREIGN KEY (`id_techno`) REFERENCES `techno`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
