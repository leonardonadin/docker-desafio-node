CREATE DATABASE `nodedb`;

USE `nodedb`;

DROP TABLE IF EXISTS `people`;

CREATE TABLE `people` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);