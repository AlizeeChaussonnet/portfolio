-- CreateTable
CREATE TABLE `projet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(500) NOT NULL,
    `link` VARCHAR(500) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `explanation` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `techno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `id_technos` INTEGER NOT NULL,

    INDEX `fk_projet_techno`(`id_technos`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `techno` ADD CONSTRAINT `fk_projet_techno` FOREIGN KEY (`id_technos`) REFERENCES `projet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
