DROP DATABASE IF EXISTS trainme_db;

CREATE DATABASE trainme_db;

USE trainme_db;

-- MySQL Script generated by MySQL Workbench
-- Thu Sep 30 20:57:20 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `exercise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `body_part` VARCHAR(45) NOT NULL,
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NOT NULL,
  `email` VARCHAR(125) NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL DEFAULT 'Trainer',
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `date_of_birth` VARCHAR(15) NOT NULL,
  `gender` VARCHAR(1) NOT NULL,
  `email` VARCHAR(125) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `address_line_1` VARCHAR(125) NULL,
  `address_line_2` VARCHAR(125) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `zip` VARCHAR(5) NULL,
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  `user_id` INT NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_client_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `diet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client_diet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `meal1` VARCHAR(255) NULL,
  `meal2` VARCHAR(255) NULL,
  `meal3` VARCHAR(255) NULL,
  `meal4` VARCHAR(255) NULL,
  `meal5` VARCHAR(255) NULL,
  `meal6` VARCHAR(255) NULL,
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  `client_id` INT NOT NULL,
  `client_user_id` INT NOT NULL,
  `notes` VARCHAR(255) NULL,
  PRIMARY KEY (`id`, `client_id`, `client_user_id`),
  INDEX `fk_diet_client1_idx` (`client_id` ASC, `client_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_diet_client1`
    FOREIGN KEY (`client_id` , `client_user_id`)
    REFERENCES `client` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client_workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dayofweek` VARCHAR(15) NOT NULL,
  `sets` INT NOT NULL,
  `reps` INT NOT NULL,
  `notes` VARCHAR(500) NULL,
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  `client_id` INT NOT NULL,
  `client_user_id` INT NOT NULL,
  `exercise_id` INT NOT NULL,
  PRIMARY KEY (`id`, `client_id`, `client_user_id`, `exercise_id`),
  INDEX `fk_workout_client1_idx` (`client_id` ASC, `client_user_id` ASC) VISIBLE,
  INDEX `fk_workout_exercise1_idx` (`exercise_id` ASC) VISIBLE,
  CONSTRAINT `fk_workout_client1`
    FOREIGN KEY (`client_id` , `client_user_id`)
    REFERENCES `client` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_workout_exercise1`
    FOREIGN KEY (`exercise_id`)
    REFERENCES `exercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `client_log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client_log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_id` INT NOT NULL,
  `client_user_id` INT NOT NULL,
  `notes` VARCHAR(500) NOT NULL,
  `create_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `client_id`, `client_user_id`),
  INDEX `fk_client_log_client1_idx` (`client_id` ASC, `client_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_log_client1`
    FOREIGN KEY (`client_id` , `client_user_id`)
    REFERENCES `client` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `client_profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client_profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_id` INT NOT NULL,
  `client_user_id` INT NOT NULL,
  `height` DECIMAL(4,2) NOT NULL,
  `weight` DECIMAL(5,2) NOT NULL,
  `goal_weight` DECIMAL(5,2) NOT NULL,
  `shoulders` DECIMAL(4,2) NOT NULL,
  `chest` DECIMAL(4,2) NOT NULL,
  `waist` DECIMAL(4,2) NOT NULL,
  `hips` DECIMAL(4,2) NOT NULL,
  `left_thigh` DECIMAL(4,2) NOT NULL,
  `right_thigh` DECIMAL(4,2) NOT NULL,
  `left_calf` DECIMAL(4,2) NOT NULL,
  `right_calf` DECIMAL(4,2) NOT NULL,
  `create_dtm` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` DATETIME NULL,
  PRIMARY KEY (`id`, `client_id`, `client_user_id`),
  INDEX `fk_client_profile_client1_idx` (`client_id` ASC, `client_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_profile_client1`
    FOREIGN KEY (`client_id` , `client_user_id`)
    REFERENCES `client` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;