# ************************************************************
# Sequel Pro SQL dump
# Version 4529
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.11-MariaDB)
# Database: test
# Generation Time: 2016-03-11 05:23:45 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table hackathon_admins
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hackathon_admins`;

CREATE TABLE `hackathon_admins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `hackathon_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table hackathon_registrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hackathon_registrations`;

CREATE TABLE `hackathon_registrations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `hackathon_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `school` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `student_email` varchar(100) DEFAULT NULL,
  `preferred_email` varchar(100) DEFAULT NULL,
  `gender` varchar(20) DEFAULT '',
  `resume_id` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `ethnicity` varchar(20) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `school_year` int(11) DEFAULT NULL,
  `major` varchar(100) DEFAULT NULL,
  `hackathon_attendance_count` int(11) DEFAULT NULL,
  `tshirt_size` varchar(5) DEFAULT NULL,
  `dietary_restrictions` varchar(100) DEFAULT NULL,
  `custom_fields` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table hackathons
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hackathons`;

CREATE TABLE `hackathons` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT '',
  `shortname` varchar(100) DEFAULT NULL,
  `description` text,
  `url` varchar(200) DEFAULT NULL,
  `starts_at` int(11) DEFAULT NULL,
  `ends_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
