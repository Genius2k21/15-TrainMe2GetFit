
CREATE DATABASE  IF NOT EXISTS `trainme_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trainme_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: trainme_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date_of_birth` varchar(15) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `email` varchar(125) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address_line_1` varchar(125) DEFAULT NULL,
  `address_line_2` varchar(125) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_client_user_idx` (`user_id`),
  CONSTRAINT `fk_client_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (4,'Janet','Jackson','03/15/1973','F','jjackson@gmail.com','404-312-9191','321 North Washington Avenue','Suite #4100','Tacoma','WA','02134','2021-10-01 23:00:40',NULL,4,1),(5,'Brian','Williams','12/5/1979','M','brian@yahoo.com','910-340-8123','95 West 24th Street',NULL,'Tacoma','WA','02134','2021-10-01 23:00:40',NULL,4,1);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_diet`
--

DROP TABLE IF EXISTS `client_diet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_diet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `meal1` varchar(255) DEFAULT NULL,
  `meal2` varchar(255) DEFAULT NULL,
  `meal3` varchar(255) DEFAULT NULL,
  `meal4` varchar(255) DEFAULT NULL,
  `meal5` varchar(255) DEFAULT NULL,
  `meal6` varchar(255) DEFAULT NULL,
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  `client_id` int NOT NULL,
  `client_user_id` int NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`client_id`,`client_user_id`),
  KEY `fk_diet_client1_idx` (`client_id`,`client_user_id`),
  CONSTRAINT `fk_diet_client1` FOREIGN KEY (`client_id`, `client_user_id`) REFERENCES `client` (`id`, `user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_diet`
--

LOCK TABLES `client_diet` WRITE;
/*!40000 ALTER TABLE `client_diet` DISABLE KEYS */;
INSERT INTO `client_diet` VALUES (2,'Get Fit Plan','1/2 cup egg whites scrambled with 1 teaspoon olive oil, 1 teaspoon chopped basil, 1 teaspoon grated Parmesan, and 1/2 cup cherry tomatoes\n1 slice whole-grain toast\n1/2 cup blueberries\n1 cup skim milk','1/2 cup fat-free Greek yogurt topped with 1/4 cup sliced strawberries\n','Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies and 1 tablespoon low-fat vinaigrette','2 tablespoons hummus and 6 baby carrots','4 ounces grilled salmon 1 cup wild rice with 1 tablespoon slivered toasted almonds 1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar',NULL,'2021-10-02 12:09:39',NULL,4,4,NULL),(3,'Get Fit Plan','1/2 cup egg whites scrambled with 1 teaspoon olive oil, 1 teaspoon chopped basil, 1 teaspoon grated Parmesan, and 1/2 cup cherry tomatoes\n1 slice whole-grain toast\n1/2 cup blueberries\n1 cup skim milk','1/2 cup fat-free Greek yogurt topped with 1/4 cup sliced strawberries\n','Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies and 1 tablespoon low-fat vinaigrette','2 tablespoons hummus and 6 baby carrots','4 ounces grilled salmon 1 cup wild rice with 1 tablespoon slivered toasted almonds 1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar',NULL,'2021-10-02 12:09:39',NULL,5,4,NULL);
/*!40000 ALTER TABLE `client_diet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_log`
--

DROP TABLE IF EXISTS `client_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `client_user_id` int NOT NULL,
  `notes` varchar(500) NOT NULL,
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`client_id`,`client_user_id`),
  KEY `fk_client_log_client1_idx` (`client_id`,`client_user_id`),
  CONSTRAINT `fk_client_log_client1` FOREIGN KEY (`client_id`, `client_user_id`) REFERENCES `client` (`id`, `user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_log`
--

LOCK TABLES `client_log` WRITE;
/*!40000 ALTER TABLE `client_log` DISABLE KEYS */;
INSERT INTO `client_log` VALUES (1,4,4,'Client is looking to get in shape','2021-10-02 12:12:06'),(2,5,4,'Client is wanting to get healthy','2021-10-02 12:12:06');
/*!40000 ALTER TABLE `client_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_profile`
--

DROP TABLE IF EXISTS `client_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `client_user_id` int NOT NULL,
  `height` decimal(4,2) NOT NULL,
  `weight` decimal(5,2) NOT NULL,
  `goal_weight` decimal(5,2) NOT NULL,
  `shoulders` decimal(4,2) NOT NULL,
  `chest` decimal(4,2) NOT NULL,
  `waist` decimal(4,2) NOT NULL,
  `hips` decimal(4,2) NOT NULL,
  `left_thigh` decimal(4,2) NOT NULL,
  `right_thigh` decimal(4,2) NOT NULL,
  `left_calf` decimal(4,2) NOT NULL,
  `right_calf` decimal(4,2) NOT NULL,
  `create_dtm` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`client_id`,`client_user_id`),
  KEY `fk_client_profile_client1_idx` (`client_id`,`client_user_id`),
  CONSTRAINT `fk_client_profile_client1` FOREIGN KEY (`client_id`, `client_user_id`) REFERENCES `client` (`id`, `user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_profile`
--

LOCK TABLES `client_profile` WRITE;
/*!40000 ALTER TABLE `client_profile` DISABLE KEYS */;
INSERT INTO `client_profile` VALUES (1,5,4,64.00,210.00,185.00,18.00,23.00,34.00,38.00,29.00,29.00,18.00,18.00,'2021-10-02 11:52:29',NULL),(2,4,4,72.00,188.00,200.00,20.00,31.00,36.00,39.00,30.00,30.00,20.00,21.00,'2021-10-01 00:00:00',NULL);
/*!40000 ALTER TABLE `client_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_workout`
--

DROP TABLE IF EXISTS `client_workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_workout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dayofweek` varchar(15) NOT NULL,
  `sets` int NOT NULL,
  `reps` int NOT NULL,
  `notes` varchar(500) DEFAULT NULL,
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  `client_id` int NOT NULL,
  `client_user_id` int NOT NULL,
  `exercise_id` int NOT NULL,
  PRIMARY KEY (`id`,`client_id`,`client_user_id`,`exercise_id`),
  KEY `fk_workout_client1_idx` (`client_id`,`client_user_id`),
  KEY `fk_workout_exercise1_idx` (`exercise_id`),
  CONSTRAINT `fk_workout_client1` FOREIGN KEY (`client_id`, `client_user_id`) REFERENCES `client` (`id`, `user_id`),
  CONSTRAINT `fk_workout_exercise1` FOREIGN KEY (`exercise_id`) REFERENCES `exercise` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_workout`
--

LOCK TABLES `client_workout` WRITE;
/*!40000 ALTER TABLE `client_workout` DISABLE KEYS */;
INSERT INTO `client_workout` VALUES (7,'Monday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,1),(8,'Monday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,2),(9,'Monday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,3),(10,'Monday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,4),(11,'Tuesday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,2),(12,'Tuesday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,5),(13,'Tuesday',3,12,NULL,'2021-10-02 12:33:24',NULL,4,4,6),(14,'Friday',3,15,NULL,'2021-10-02 12:36:01',NULL,4,4,7);
/*!40000 ALTER TABLE `client_workout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `body_part` varchar(45) NOT NULL,
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'Dumbbell Bench Press','Chest','2021-10-02 12:25:45',NULL,4),(2,'Push Ups','Chest','2021-10-02 12:25:45',NULL,4),(3,'Chest Dip','Chest','2021-10-02 12:25:45',NULL,4),(4,'SitUps','Abdominal','2021-10-02 12:25:45',NULL,4),(5,'TBar Row','Back','2021-10-02 12:29:11',NULL,4),(6,'Supermans','Back','2021-10-02 12:29:11',NULL,4),(7,'Front Squats','Quadriceps','2021-10-02 12:29:11',NULL,4),(8,'Walking Lunges','Quadriceps','2021-10-02 12:29:11',NULL,4),(9,'Romanian Deadlift','Hamstrings','2021-10-02 12:29:11',NULL,4),(10,'Lying Leg Curls','Hamstrings','2021-10-02 12:29:11',NULL,4),(11,'Overhead Extension','Triceps','2021-10-02 12:29:11',NULL,4),(12,'Dip','Triceps','2021-10-02 12:29:11',NULL,4),(13,'Front Raise','Shoulders','2021-10-02 12:29:11',NULL,4),(14,'Lateral Raise','Shoulders','2021-10-02 12:29:11',NULL,4);
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `email` varchar(125) NOT NULL,
  `password` varchar(25) NOT NULL,
  `user_type` varchar(45) NOT NULL DEFAULT 'Trainer',
  `create_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dtm` datetime DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'test','mytest@test.com','testpassword','Trainer','2021-10-01 22:57:47',NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'trainme_db'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_createUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createUser`(IN username VARCHAR(25), IN email VARCHAR(45), IN password VARCHAR(25), OUT userid INT)
BEGIN
	INSERT INTO USER(username,email,password) VALUES(username, email, password);
	SELECT LAST_INSERT_ID() INTO userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getAllClientDiet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getAllClientDiet`(IN userid INT)
BEGIN
	SELECT * FROM client_diet
    WHERE client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getAllClientLog` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getAllClientLog`(IN userid INT)
BEGIN
	SELECT * FROM client_log
    WHERE client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getAllClientProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getAllClientProfile`(IN userid INT)
BEGIN
	SELECT * FROM client_profile
    WHERE client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getAllClientWorkout` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getAllClientWorkout`(IN userid INT)
BEGIN
	SELECT wk.*, ex.name as exercise_name, ex.body_part 
    FROM client_workout wk
    INNER JOIN exercise ex
		ON wk.exercise_id = ex.id
    WHERE client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getClientDiet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClientDiet`(IN userid INT, IN clientid INT)
BEGIN
	SELECT * FROM client_diet
    WHERE client_id = clientid
    AND client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getClientLog` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClientLog`(IN userid INT, IN clientid INT)
BEGIN
	SELECT * FROM client_log
    WHERE client_id = clientid
    AND client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getClientProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClientProfile`(IN userid INT, IN clientid INT)
BEGIN
	SELECT * FROM client_profile
    WHERE client_id = clientid
    AND client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getClients` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClients`(IN userid INT)
BEGIN
	SELECT * FROM client WHERE user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getClientWorkout` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClientWorkout`(IN userid INT, IN clientid INT)
BEGIN
	SELECT wk.*, ex.name as exercise_name, ex.body_part 
    FROM client_workout wk
    INNER JOIN exercise ex
		ON wk.exercise_id = ex.id
    WHERE client_id = clientid
    AND client_user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getUser`(IN username VARCHAR(25), IN password VARCHAR(25), OUT userid INT)
BEGIN
	SELECT id INTO userid
    FROM user 
    WHERE username = username
    AND password = password;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getUserExercise` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getUserExercise`(IN userid INT)
BEGIN
	SELECT * FROM exercise
    where user_id = userid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-02 15:00:59
