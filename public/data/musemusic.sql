-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2023-09-22 17:17:18
-- 伺服器版本： 8.0.31
-- PHP 版本： 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `musemusic`
--

-- --------------------------------------------------------

--
-- 資料表結構 `admin_acc`
--

DROP TABLE IF EXISTS `admin_acc`;
CREATE TABLE IF NOT EXISTS `admin_acc` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `acc` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `admin_psw` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `acc` (`acc`),
  UNIQUE KEY `acc_2` (`acc`),
  UNIQUE KEY `admin_psw` (`admin_psw`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理員帳號';

-- --------------------------------------------------------

--
-- 資料表結構 `album`
--

DROP TABLE IF EXISTS `album`;
CREATE TABLE IF NOT EXISTS `album` (
  `alb_id` int NOT NULL AUTO_INCREMENT,
  `alb_name` varchar(50) DEFAULT NULL,
  `alb_intro` varchar(300) DEFAULT NULL,
  `alb_img` varchar(25) DEFAULT NULL,
  `upload_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `mem_id` int NOT NULL,
  `share_num` int DEFAULT NULL,
  PRIMARY KEY (`alb_id`),
  KEY `mem_id` (`mem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='專輯';

-- --------------------------------------------------------

--
-- 資料表結構 `alb_rank`
--

DROP TABLE IF EXISTS `alb_rank`;
CREATE TABLE IF NOT EXISTS `alb_rank` (
  `rank_id` int NOT NULL AUTO_INCREMENT,
  `alb_id` int DEFAULT NULL,
  PRIMARY KEY (`rank_id`),
  KEY `alb_id` (`alb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='專輯排行榜';

-- --------------------------------------------------------

--
-- 資料表結構 `carousel`
--

DROP TABLE IF EXISTS `carousel`;
CREATE TABLE IF NOT EXISTS `carousel` (
  `car_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `img` varchar(25) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='輪播資訊';

-- --------------------------------------------------------

--
-- 資料表結構 `cre_fol`
--

DROP TABLE IF EXISTS `cre_fol`;
CREATE TABLE IF NOT EXISTS `cre_fol` (
  `mem_id` int NOT NULL,
  `cre_id` int NOT NULL,
  PRIMARY KEY (`mem_id`,`cre_id`),
  KEY `cre_id` (`cre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='創作者追蹤';

-- --------------------------------------------------------

--
-- 資料表結構 `faq`
--

DROP TABLE IF EXISTS `faq`;
CREATE TABLE IF NOT EXISTS `faq` (
  `faq_id` int NOT NULL AUTO_INCREMENT,
  `que` varchar(30) DEFAULT NULL,
  `ans` varchar(200) DEFAULT NULL,
  `short_ans` varchar(50) DEFAULT NULL,
  `keyword` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`faq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='常見問題';

-- --------------------------------------------------------

--
-- 資料表結構 `fav`
--

DROP TABLE IF EXISTS `fav`;
CREATE TABLE IF NOT EXISTS `fav` (
  `mem_id` int NOT NULL,
  `s_id` int NOT NULL,
  PRIMARY KEY (`mem_id`,`s_id`),
  KEY `s_id` (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='我的最愛';

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `mem_id` int NOT NULL AUTO_INCREMENT,
  `mem_name` varchar(10) DEFAULT NULL,
  `mem_acc` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `bind_acc` varchar(100) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT NULL,
  `county` varchar(10) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `mem_pic` varchar(25) DEFAULT NULL,
  `cover_pic` varchar(25) DEFAULT NULL,
  `privacy` tinyint(1) DEFAULT NULL,
  `r_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `mem_aka` varchar(10) DEFAULT NULL,
  `social_media` varchar(100) DEFAULT NULL,
  `fol_num` int DEFAULT NULL,
  PRIMARY KEY (`mem_id`),
  UNIQUE KEY `mem_acc` (`mem_acc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `msg`
--

DROP TABLE IF EXISTS `msg`;
CREATE TABLE IF NOT EXISTS `msg` (
  `msg_id` int NOT NULL AUTO_INCREMENT,
  `mem_id` int DEFAULT NULL,
  `msg_con` varchar(100) DEFAULT NULL,
  `msg_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `msg_like` int DEFAULT NULL,
  PRIMARY KEY (`msg_id`),
  KEY `mem_id` (`mem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌曲留言';

-- --------------------------------------------------------

--
-- 資料表結構 `msg_rep`
--

DROP TABLE IF EXISTS `msg_rep`;
CREATE TABLE IF NOT EXISTS `msg_rep` (
  `msgrep_id` int NOT NULL AUTO_INCREMENT,
  `mem_id` int DEFAULT NULL,
  `msg_id` int NOT NULL,
  `rep_rsn` varchar(100) DEFAULT NULL,
  `rep_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`msgrep_id`),
  KEY `mem_id` (`mem_id`),
  KEY `msg_id` (`msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='檢舉歌曲留言';

-- --------------------------------------------------------

--
-- 資料表結構 `music_cat`
--

DROP TABLE IF EXISTS `music_cat`;
CREATE TABLE IF NOT EXISTS `music_cat` (
  `mcat_id` int NOT NULL AUTO_INCREMENT,
  `mcat_name` varchar(15) DEFAULT NULL,
  `mcat_type` tinyint DEFAULT NULL,
  PRIMARY KEY (`mcat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='音樂類別';

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `singer` varchar(30) NOT NULL,
  `news_name` varchar(30) NOT NULL,
  `news_date` datetime NOT NULL,
  `news_place` varchar(50) NOT NULL,
  `news_update` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `news_con` varchar(200) NOT NULL,
  `news_pic` varchar(25) NOT NULL,
  `news_area` varchar(10) NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='音樂快訊';

-- --------------------------------------------------------

--
-- 資料表結構 `news_fo`
--

DROP TABLE IF EXISTS `news_fo`;
CREATE TABLE IF NOT EXISTS `news_fo` (
  `mem_id` int NOT NULL,
  `news_id` int NOT NULL,
  PRIMARY KEY (`mem_id`,`news_id`),
  KEY `news_id` (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='音樂快訊追蹤';

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `ord_id` int NOT NULL AUTO_INCREMENT,
  `ord_date` datetime DEFAULT NULL,
  `mem_id` int NOT NULL,
  `ord_name` varchar(10) DEFAULT NULL,
  `ord_tel` varchar(10) DEFAULT NULL,
  `ord_add` varchar(50) DEFAULT NULL,
  `ord_pay` varchar(10) DEFAULT NULL,
  `ord_ship` varchar(10) DEFAULT NULL,
  `ord_total_price` int DEFAULT NULL,
  `ord_stat` tinytext,
  PRIMARY KEY (`ord_id`),
  KEY `mem_id` (`mem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='訂單';

-- --------------------------------------------------------

--
-- 資料表結構 `orders_item`
--

DROP TABLE IF EXISTS `orders_item`;
CREATE TABLE IF NOT EXISTS `orders_item` (
  `ord_id` int NOT NULL,
  `prod_id` int NOT NULL,
  `ord_price` int DEFAULT NULL,
  `ord_pcs` int DEFAULT NULL,
  PRIMARY KEY (`ord_id`,`prod_id`),
  KEY `prod_id` (`prod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='訂單明細';

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `prod_name` varchar(25) DEFAULT NULL,
  `prod_inf` varchar(300) DEFAULT NULL,
  `prod_int` varchar(300) DEFAULT NULL,
  `prod_pic` varchar(25) DEFAULT NULL,
  `prod_price` int DEFAULT NULL,
  `prod_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `show_stat` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  KEY `type_id` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品';

-- --------------------------------------------------------

--
-- 資料表結構 `prod_type`
--

DROP TABLE IF EXISTS `prod_type`;
CREATE TABLE IF NOT EXISTS `prod_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品類別';

-- --------------------------------------------------------

--
-- 資料表結構 `slitem`
--

DROP TABLE IF EXISTS `slitem`;
CREATE TABLE IF NOT EXISTS `slitem` (
  `sl_id` int NOT NULL,
  `s_id` int NOT NULL,
  PRIMARY KEY (`sl_id`,`s_id`),
  KEY `s_id` (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌單明細';

-- --------------------------------------------------------

--
-- 資料表結構 `sl_fol`
--

DROP TABLE IF EXISTS `sl_fol`;
CREATE TABLE IF NOT EXISTS `sl_fol` (
  `mem_id` int NOT NULL,
  `sl_id` int NOT NULL,
  `fol_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`mem_id`,`sl_id`),
  KEY `sl_id` (`sl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌單追蹤';

-- --------------------------------------------------------

--
-- 資料表結構 `song`
--

DROP TABLE IF EXISTS `song`;
CREATE TABLE IF NOT EXISTS `song` (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `mem_id` int DEFAULT NULL,
  `alb_id` int DEFAULT NULL,
  `s_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `s_intro` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `s_img` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `s_src` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `s_lyrics` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `s_length` time DEFAULT NULL,
  `s_stat` tinyint(1) DEFAULT NULL,
  `upload_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `play_num` int DEFAULT NULL,
  `fav_num` int DEFAULT NULL,
  `share_num` int DEFAULT NULL,
  `show_stat` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`s_id`),
  KEY `mem_id` (`mem_id`),
  KEY `alb_id` (`alb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌曲';

-- --------------------------------------------------------

--
-- 資料表結構 `song_cat`
--

DROP TABLE IF EXISTS `song_cat`;
CREATE TABLE IF NOT EXISTS `song_cat` (
  `s_id` int NOT NULL,
  `mcat_id` int NOT NULL,
  PRIMARY KEY (`s_id`,`mcat_id`),
  KEY `mcat_id` (`mcat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `song_list`
--

DROP TABLE IF EXISTS `song_list`;
CREATE TABLE IF NOT EXISTS `song_list` (
  `sl_id` int NOT NULL AUTO_INCREMENT,
  `mem_id` int NOT NULL,
  `sl_name` varchar(15) DEFAULT NULL,
  `public` tinyint(1) DEFAULT NULL,
  `fol_num` int DEFAULT NULL,
  `share_num` int DEFAULT NULL,
  `song_count` int DEFAULT NULL,
  PRIMARY KEY (`sl_id`),
  KEY `mem_id` (`mem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌單';

-- --------------------------------------------------------

--
-- 資料表結構 `s_rank`
--

DROP TABLE IF EXISTS `s_rank`;
CREATE TABLE IF NOT EXISTS `s_rank` (
  `rank_id` int NOT NULL,
  `s_id` int DEFAULT NULL,
  PRIMARY KEY (`rank_id`),
  KEY `s_id` (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='歌曲排行榜';

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制式 `alb_rank`
--
ALTER TABLE `alb_rank`
  ADD CONSTRAINT `alb_rank_ibfk_1` FOREIGN KEY (`alb_id`) REFERENCES `alb_rank` (`rank_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- 資料表的限制式 `cre_fol`
--
ALTER TABLE `cre_fol`
  ADD CONSTRAINT `cre_fol_ibfk_1` FOREIGN KEY (`cre_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cre_fol_ibfk_2` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `fav`
--
ALTER TABLE `fav`
  ADD CONSTRAINT `fav_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fav_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `song` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `msg`
--
ALTER TABLE `msg`
  ADD CONSTRAINT `msg_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- 資料表的限制式 `msg_rep`
--
ALTER TABLE `msg_rep`
  ADD CONSTRAINT `msg_rep_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `msg_rep_ibfk_2` FOREIGN KEY (`msg_id`) REFERENCES `msg` (`msg_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `news_fo`
--
ALTER TABLE `news_fo`
  ADD CONSTRAINT `news_fo_ibfk_1` FOREIGN KEY (`news_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_fo_ibfk_2` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `orders_item`
--
ALTER TABLE `orders_item`
  ADD CONSTRAINT `orders_item_ibfk_1` FOREIGN KEY (`ord_id`) REFERENCES `orders` (`ord_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_item_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON UPDATE CASCADE;

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `prod_type` (`type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制式 `slitem`
--
ALTER TABLE `slitem`
  ADD CONSTRAINT `slitem_ibfk_1` FOREIGN KEY (`sl_id`) REFERENCES `song_list` (`sl_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `slitem_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `song` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `sl_fol`
--
ALTER TABLE `sl_fol`
  ADD CONSTRAINT `sl_fol_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sl_fol_ibfk_2` FOREIGN KEY (`sl_id`) REFERENCES `song_list` (`sl_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `song`
--
ALTER TABLE `song`
  ADD CONSTRAINT `song_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `song_ibfk_2` FOREIGN KEY (`alb_id`) REFERENCES `album` (`alb_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- 資料表的限制式 `song_cat`
--
ALTER TABLE `song_cat`
  ADD CONSTRAINT `song_cat_ibfk_1` FOREIGN KEY (`mcat_id`) REFERENCES `music_cat` (`mcat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `song_cat_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `song` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `song_list`
--
ALTER TABLE `song_list`
  ADD CONSTRAINT `song_list_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member` (`mem_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制式 `s_rank`
--
ALTER TABLE `s_rank`
  ADD CONSTRAINT `s_rank_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `song` (`s_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
