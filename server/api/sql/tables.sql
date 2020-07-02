-- items table 
CREATE TABLE `items` ( 
    `c_number` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(100) NOT NULL , 
    `price` INT NOT NULL , 
    `has_vat` BOOLEAN NULL , 
    `enabled` BOOLEAN NOT NULL DEFAULT TRUE , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`c_number`)
) ENGINE = InnoDB;

CREATE TABLE `clients` (
    `name` VARCHAR(100) NOT NULL , 
    `type` ENUM('resturant','coffee_house','bar') NOT NULL , 
    `enabled` BOOLEAN NOT NULL DEFAULT TRUE , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`name`)
) ENGINE = InnoDB;

CREATE TABLE `diversities` ( 
    `name` VARCHAR(100) NOT NULL , 
    `enabled` BOOLEAN NOT NULL DEFAULT TRUE , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
     PRIMARY KEY (`name`)
) ENGINE = InnoDB;

CREATE TABLE `diversity_combo` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `client` VARCHAR(100) NOT NULL , 
    `item` INT NOT NULL , 
    `diversity` VARCHAR(100) NOT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    FOREIGN KEY (`client`) REFERENCES clients(`name`),
    FOREIGN KEY (`item`) REFERENCES items(`c_number`),
    FOREIGN KEY (`diversity`) REFERENCES diversities(`name`),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- populate

INSERT INTO items (`name`, `price`, `has_vat`, `enabled`) VALUES 
	('soda', 5, null, 1),
	('water', 3, null, 1),
	('coke', 10, null, 1);

INSERT INTO clients (`name`, `type`, `enabled`) VALUES 
	('KFC', 'resturant', 1),
	('starbucks', 'coffee_house', 1),
	('landver', 'coffee_house', 1);

INSERT INTO diversities (`name`, `enabled`) VALUES 
	('one', 1),
	('two', 1);

INSERT INTO diversity_combo (`client`, `item`, `diversity`) VALUES  
	('KFC', 13, 'one'),
	('KFC', 15, 'one'),
	('landver', 13, 'two'),
	('landver', 14, 'two'),
	('starbucks', 13, 'two');