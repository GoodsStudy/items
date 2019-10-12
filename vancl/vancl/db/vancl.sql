/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : vancl

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 21:01:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bq
-- ----------------------------
DROP TABLE IF EXISTS `bq`;
CREATE TABLE `bq` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bq
-- ----------------------------
INSERT INTO `bq` VALUES ('1', 'g11.jpg', '帆布鞋');
INSERT INTO `bq` VALUES ('2', 'g12.jpg', '家居');
INSERT INTO `bq` VALUES ('3', 'g13.jpg', '围巾');
INSERT INTO `bq` VALUES ('4', 'g14.jpg', '家居');
INSERT INTO `bq` VALUES ('5', 'g15.jpg', '家居');
INSERT INTO `bq` VALUES ('6', 'g16.jpg', '袜品');

-- ----------------------------
-- Table structure for colorimg
-- ----------------------------
DROP TABLE IF EXISTS `colorimg`;
CREATE TABLE `colorimg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of colorimg
-- ----------------------------
INSERT INTO `colorimg` VALUES ('1', '5', '黑色', 'listsh05.jpg');
INSERT INTO `colorimg` VALUES ('2', '5', '黑色', 'listsh01.jpg');
INSERT INTO `colorimg` VALUES ('3', '5', '黑色', 'listh02.jpg');
INSERT INTO `colorimg` VALUES ('4', '5', '灰色', 'lists5.gif');

-- ----------------------------
-- Table structure for discount
-- ----------------------------
DROP TABLE IF EXISTS `discount`;
CREATE TABLE `discount` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of discount
-- ----------------------------
INSERT INTO `discount` VALUES ('1', 'bjg1.jpg', '凡客日式免烫衬衫领尖扣');
INSERT INTO `discount` VALUES ('2', 'bjg2.jpg', '凡客日式免烫衬衫温莎领');
INSERT INTO `discount` VALUES ('3', 'bjg3.jpg', '舒适商务衬衫 ');
INSERT INTO `discount` VALUES ('4', 'bjg4.jpg', '衬衫 易打理 领尖扣 男款');
INSERT INTO `discount` VALUES ('5', 'bjg5.jpg', '休闲衬衫 法兰绒 男款 ');
INSERT INTO `discount` VALUES ('6', 'bjg6.jpg', '凡客衬衫 牛津纺 领尖扣');
INSERT INTO `discount` VALUES ('7', 'bjg7.jpg', '休闲衬衫 灯芯绒 男款');
INSERT INTO `discount` VALUES ('8', 'bjg8.jpg', '凡客外套 水柔棉 拉链开衫');
INSERT INTO `discount` VALUES ('9', 'bjg9.jpg', '凡客夹克 双帽双拉链 轻弹 男款');
INSERT INTO `discount` VALUES ('10', 'bjg10.jpg', '卫衣 创可贴 成名曲');
INSERT INTO `discount` VALUES ('11', 'bjg11.jpg', '卫衣 创可贴 成名曲');
INSERT INTO `discount` VALUES ('12', 'bjg12.jpg', '凡客酷MA萌熊本熊卫衣');
INSERT INTO `discount` VALUES ('13', 'bjg13.jpg', '凡客牛仔裤 修身直筒 轻弹黑牛');
INSERT INTO `discount` VALUES ('14', 'bjg14.jpg', '凡客牛仔裤 针织收口裤');
INSERT INTO `discount` VALUES ('15', 'bjg15.jpg', '凡客纯棉舒适家居套装 男款');
INSERT INTO `discount` VALUES ('16', 'bjg16.jpg', '凡客纯棉舒适家居套装 男款');
INSERT INTO `discount` VALUES ('17', 'bjg17.jpg', '凡客内裤 棉氨 男款');
INSERT INTO `discount` VALUES ('18', 'bjg18.jpg', '凡客运动鞋 飞织 男款 ');
INSERT INTO `discount` VALUES ('19', 'bjg19.jpg', '凡客帆布鞋 高帮 男款 ');
INSERT INTO `discount` VALUES ('20', 'bjg20.jpg', '凡客透气耐磨运动船袜(两双装) ');

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `colorid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `colorimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `bimg` varchar(255) DEFAULT NULL,
  `himg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `kc` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=551 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES ('1', '1', '2', 'lists2.jpg&lists1.jpg', 'lists3.jpg', 'lists2.jpg&lists3.jpg', '黑色&白色', 'S&M&L&XL&XXL', '15');
INSERT INTO `good` VALUES ('2', '2', '3', 'lists3.jpg&lists4.jpg', null, 'lists1.jpg', '白色', 'S&M&L&XL&XXL', '20');

-- ----------------------------
-- Table structure for gouwu
-- ----------------------------
DROP TABLE IF EXISTS `gouwu`;
CREATE TABLE `gouwu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` varchar(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `kc` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gouwu
-- ----------------------------
INSERT INTO `gouwu` VALUES ('87', '1234', '5', '黑色', 'M', '1');
INSERT INTO `gouwu` VALUES ('88', '1234', '5', '灰色', 'M', '1');
INSERT INTO `gouwu` VALUES ('86', '1234', '5', '黑色', 'XXL', '1');
INSERT INTO `gouwu` VALUES ('96', '13367625575', '5', '灰色', 'XXL', '5');
INSERT INTO `gouwu` VALUES ('82', '123', '5', '灰色', 'M', '1');
INSERT INTO `gouwu` VALUES ('83', '123', '5', '黑色', 'M', '1');
INSERT INTO `gouwu` VALUES ('84', '123', '5', '黑色', 'XXL', '1');
INSERT INTO `gouwu` VALUES ('98', '13367625575', '5', '灰色', 'XL', '2');
INSERT INTO `gouwu` VALUES ('97', '13367625575', '5', '灰色', 'M', '11');

-- ----------------------------
-- Table structure for listgood
-- ----------------------------
DROP TABLE IF EXISTS `listgood`;
CREATE TABLE `listgood` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` int(10) DEFAULT NULL,
  `tehui` int(11) DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listgood
-- ----------------------------
INSERT INTO `listgood` VALUES ('1', '凡客皮肤衣 针织弹力 滑爽透气 男款 ', 'http://p2.vanclimg.com/300/300/product/6/3/7/6375919/mid/6375919-1j201704071345418493.jpg', '378', '398', 'true');
INSERT INTO `listgood` VALUES ('2', 'T恤 欧飞鸿 英雌 ', 'http://p2.vanclimg.com/300/300/product/6/3/8/6380841/mid/6380841-1j201903071558460489.jpg', '58', '156', 'true');
INSERT INTO `listgood` VALUES ('3', 'T恤 欧飞鸿 飞 ', 'http://p3.vanclimg.com/300/300/product/6/3/8/6380842/mid/6380842-1j201903071558410332.jpg', '58', '156', 'true');
INSERT INTO `listgood` VALUES ('4', 'T恤 山鸟叔 颜摄 ', 'http://p5.vanclimg.com/300/300/product/6/3/8/6386681/mid/6386681-1j201910091029483162.jpg', '58', '156', 'true');
INSERT INTO `listgood` VALUES ('5', '凡客轻暖便携连帽羽绒服 ', 'http://p5.vanclimg.com/300/300/product/6/3/8/6386672/mid/6386672-1j201909291425364612.jpg', '156', null, 'false');
INSERT INTO `listgood` VALUES ('6', '凡客轻暖便携连帽羽绒服 ', 'http://p2.vanclimg.com/300/300/product/6/3/8/6386683/mid/6386683-1j201909291727321624.jpg', '156', null, 'false');
INSERT INTO `listgood` VALUES ('7', '凡客轻暖便携连帽羽绒服 ', 'http://p1.vanclimg.com/300/300/product/6/3/8/6386682/mid/6386682-1j201909291727320374.jpg', '156', null, 'false');
INSERT INTO `listgood` VALUES ('8', '凡客日式宽松免烫衬衫 小方领 ', 'http://p5.vanclimg.com/300/300/product/6/3/8/6386636/mid/6386636-1j201909241336534204.jpg', '156', null, 'false');
INSERT INTO `listgood` VALUES ('9', '休闲衬衫 法兰绒 男款 ', 'http://p4.vanclimg.com/300/300/product/6/3/8/6386707/mid/6386707-1j201909291613469720.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('10', '休闲衬衫 法兰绒 男款 ', 'http://p1.vanclimg.com/300/300/product/6/3/8/6386704/mid/6386704-1j201909291615515524.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('11', '休闲衬衫 法兰绒 男款 ', 'http://p5.vanclimg.com/300/300/product/6/3/8/6386703/mid/6386703-1j201909291616415530.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('12', '休闲衬衫 法兰绒 男款 ', 'http://p3.vanclimg.com/300/300/product/6/3/8/6386701/mid/6386701-1j201909291618516795.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('13', '休闲衬衫 法兰绒 男款 ', 'http://p2.vanclimg.com/300/300/product/6/3/8/6386700/mid/6386700-1j201909291619265551.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('14', '休闲衬衫 法兰绒 男款 ', 'http://p4.vanclimg.com/300/300/product/6/3/8/6386699/mid/6386699-1j201909291620015554.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('15', '休闲衬衫 法兰绒 男款 ', 'http://p3.vanclimg.com/300/300/product/6/3/8/6386698/mid/6386698-1j201909291620315556.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('16', '凡客基础多色家居套装 女款 ', 'http://p3.vanclimg.com/300/300/product/6/3/8/6386701/mid/6386701-1j201909291618516795.jpg', '398', null, 'false');
INSERT INTO `listgood` VALUES ('17', '休闲衬衫 法兰绒 男款 ', 'http://p2.vanclimg.com/300/300/product/6/3/8/6386700/mid/6386700-1j201909291619265551.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('18', '休闲衬衫 法兰绒 男款 ', 'http://p4.vanclimg.com/300/300/product/6/3/8/6386699/mid/6386699-1j201909291620015554.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('19', '休闲衬衫 法兰绒 男款 ', 'http://p3.vanclimg.com/300/300/product/6/3/8/6386698/mid/6386698-1j201909291620315556.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('20', '凡客强缩绒牛角扣大衣 女款', 'http://p1.vanclimg.com/300/300/product/6/3/8/6386696/mid/6386696-1j201909291621315558.jpg', '398', null, 'false');
INSERT INTO `listgood` VALUES ('21', '凡客强缩绒西服领大衣 黑色', 'http://p2.vanclimg.com/300/300/product/6/3/8/6386697/mid/6386697-1j201909291621016806.jpg', '398', null, 'false');
INSERT INTO `listgood` VALUES ('22', '凡客强缩绒西服领大衣 藏蓝色', 'http://p4.vanclimg.com/300/300/product/6/3/8/6386702/mid/6386702-1j201909291618215545.jpg', '398', null, 'false');
INSERT INTO `listgood` VALUES ('23', '休闲衬衫 法兰绒 女款 姜黄色', 'http://p4.vanclimg.com/300/300/product/6/3/8/6386676/mid/6386676-1j201910090958534161.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('24', '休闲衬衫 法兰绒 女款 保罗格黑白', 'http://p1.vanclimg.com/300/300/product/6/3/8/6386718/mid/6386718-1j201909291607069190.jpg', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('25', '休闲衬衫 法兰绒 女款 黑卫士格绿', 'http://i.vanclimg.com/search/color3.gif', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('26', '休闲衬衫 法兰绒 女款 罗伊小格蓝白', 'http://i.vanclimg.com/search/color3.gif', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('27', '休闲衬衫 法兰绒 女款 罗伊大格红黑', 'http://i.vanclimg.com/search/color3.gif', '398', '398', 'true');
INSERT INTO `listgood` VALUES ('28', '休闲衬衫 法兰绒 女款 藏青色', 'http://i.vanclimg.com/search/color3.gif', '198', '398', 'true');
INSERT INTO `listgood` VALUES ('29', '法兰绒 衬衫式连衣裙 罗伊小格蓝白', 'http://i.vanclimg.com/search/color3.gif', '398', '598', 'true');
INSERT INTO `listgood` VALUES ('30', '法兰绒 衬衫式连衣裙 罗伊大格红黑', 'http://i.vanclimg.com/search/color3.gif', '298', '598', 'true');
INSERT INTO `listgood` VALUES ('31', '法兰绒 衬衫式连衣裙 保罗格黑白', 'http://i.vanclimg.com/search/color3.gif', '298', '598', 'true');
INSERT INTO `listgood` VALUES ('32', '法兰绒 衬衫式连衣裙 黑卫士格绿', 'http://i.vanclimg.com/search/color3.gif', '298', '598', 'true');
INSERT INTO `listgood` VALUES ('33', '法兰绒 衬衫式连衣裙 保罗格红蓝', 'http://i.vanclimg.com/search/color3.gif', '298', '598', 'true');
INSERT INTO `listgood` VALUES ('34', '针织衫开衫 棉线可机洗 男款 灰色', 'http://i.vanclimg.com/search/color3.gif', '298', '598', 'true');
INSERT INTO `listgood` VALUES ('35', '针织衫开衫 棉线可机洗 男款 黑色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('36', '针织衫V领 棉线可机洗 男款 天蓝色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('37', '针织衫V领 棉线可机洗 男款 藏青色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('38', '针织衫V领 棉线可机洗 男款 灰色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('39', '针织衫V领 棉线可机洗 男款 黑色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('40', '针织衫圆领 棉线可机洗 男款 天蓝色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('41', '针织衫圆领 棉线可机洗 男款 藏青色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('42', '针织衫圆领 棉线可机洗 男款 灰色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('43', '针织衫圆领 棉线可机洗 男款 姜黄', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('44', '针织衫圆领 棉线可机洗 男款 黑色', 'http://i.vanclimg.com/search/color3.gif', '258', '398', 'true');
INSERT INTO `listgood` VALUES ('45', '凡客暖绒熊本熊卫衣 电视机灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('46', '凡客暖绒熊本熊卫衣 电视机黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('47', '凡客暖绒熊本熊卫衣 躲猫猫黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('48', '凡客暖绒熊本熊卫衣 躲猫猫灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('49', '凡客暖绒熊本熊卫衣 柔道黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('50', '凡客暖绒熊本熊卫衣 柔道灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('51', '凡客酷MA萌熊本熊卫衣 字母黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('52', '凡客酷MA萌熊本熊卫衣 字母灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('53', '凡客酷MA萌熊本熊卫衣 开心黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('54', '凡客酷MA萌熊本熊卫衣 开心灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('55', '凡客酷MA萌熊本熊卫衣 酷MA萌灰', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('56', '凡客酷MA萌熊本熊卫衣 酷MA萌黑', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('57', '凡客140D高弹连裤袜 2条装 深麻灰色', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('58', '凡客140D高弹连裤袜 2条装 黑色', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('59', '凡客200D精梳柔棉显瘦竖纹连裤袜 2条装 奶咖', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');
INSERT INTO `listgood` VALUES ('60', '凡客200D精梳柔棉显瘦竖纹连裤袜 2条装 麻咖', 'http://i.vanclimg.com/search/color3.gif', '598', null, 'false');

-- ----------------------------
-- Table structure for lunyan
-- ----------------------------
DROP TABLE IF EXISTS `lunyan`;
CREATE TABLE `lunyan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lunyan
-- ----------------------------
INSERT INTO `lunyan` VALUES ('1', '1', 'dfgsd');

-- ----------------------------
-- Table structure for newgood
-- ----------------------------
DROP TABLE IF EXISTS `newgood`;
CREATE TABLE `newgood` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newgood
-- ----------------------------
INSERT INTO `newgood` VALUES ('1', 'x1.jpg', '凡客日式免烫衬衫领尖扣 蓝色');
INSERT INTO `newgood` VALUES ('2', 'x2.jpg', '凡客日式免烫衬衫温莎领');
INSERT INTO `newgood` VALUES ('3', 'x3.jpg', '舒适商务衬衫');
INSERT INTO `newgood` VALUES ('4', 'x4.jpg', '凡客日式免烫衬衫温莎领');
INSERT INTO `newgood` VALUES ('5', 'x5.jpg', '卫衣 创可贴 惹毛我了');
INSERT INTO `newgood` VALUES ('6', 'x6.jpg', '凡客暖绒熊本熊卫衣');
INSERT INTO `newgood` VALUES ('7', 'x7.jpg', '针织衫V领 棉线可机洗 男款');
INSERT INTO `newgood` VALUES ('8', 'x8.jpg', '针织衫圆领 棉线可机洗');
INSERT INTO `newgood` VALUES ('9', 'x9.jpg', '休闲衬衫 法兰绒 男款');
INSERT INTO `newgood` VALUES ('10', 'x10.jpg', '凡客衬衫 牛津纺 领尖扣 男款');
INSERT INTO `newgood` VALUES ('11', 'x11.jpg', '休闲衬衫 灯芯绒 男款');
INSERT INTO `newgood` VALUES ('12', 'x12.jpg', '凡客帆布鞋 复古 女款 ');

-- ----------------------------
-- Table structure for seck
-- ----------------------------
DROP TABLE IF EXISTS `seck`;
CREATE TABLE `seck` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL COMMENT '图片',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `price` float NOT NULL COMMENT '原价格',
  `prices` float NOT NULL COMMENT '现价格',
  `alt` varchar(255) NOT NULL COMMENT '标签',
  `vipprice` float NOT NULL COMMENT '充值后的价格',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seck
-- ----------------------------
INSERT INTO `seck` VALUES ('1', 'seckill01.jpg', 'T恤 本广 平头白发 黑色', '118', '18', '凡客T恤 药 傻子药 浅花灰色', '9');
INSERT INTO `seck` VALUES ('2', 'seckill02.jpg', 'T恤 山鸟叔 乱 白色', '118', '18', '凡客T恤 药 傻子药 浅花灰色', '9');
INSERT INTO `seck` VALUES ('3', 'seckill03.jpg', 'T恤 张广先 UFO 白色', '118', '18', '凡客T恤 药 傻子药 浅花灰色', '9');
INSERT INTO `seck` VALUES ('4', 'seckill04.jpg', 'T恤 药 药丸 白色', '118', '18', '凡客T恤 药 傻子药 浅花灰色', '9');
INSERT INTO `seck` VALUES ('5', 'seckill05.jpg', '凡客卫衣 基础拉链开衫 女 黑色', '298', '138', '凡客卫衣 基础拉链开衫 女 黑色', '69');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `goodid` int(255) NOT NULL COMMENT '商品id',
  `nameid` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopping
-- ----------------------------

-- ----------------------------
-- Table structure for show
-- ----------------------------
DROP TABLE IF EXISTS `show`;
CREATE TABLE `show` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of show
-- ----------------------------
INSERT INTO `show` VALUES ('1', 'img/index76.jpg');
INSERT INTO `show` VALUES ('2', 'img/index77.jpg');
INSERT INTO `show` VALUES ('3', 'img/index78.jpg');
INSERT INTO `show` VALUES ('4', 'img/index79.jpg');
INSERT INTO `show` VALUES ('5', 'img/index80.jpg');
INSERT INTO `show` VALUES ('6', 'img/index81.jpg');
INSERT INTO `show` VALUES ('7', 'img/index82.jpg');

-- ----------------------------
-- Table structure for sizecolo
-- ----------------------------
DROP TABLE IF EXISTS `sizecolo`;
CREATE TABLE `sizecolo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(255) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `kc` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sizecolo
-- ----------------------------
INSERT INTO `sizecolo` VALUES ('1', '5', '黑色', '20', 'X');
INSERT INTO `sizecolo` VALUES ('2', '5', '黑色', '25', 'M');
INSERT INTO `sizecolo` VALUES ('3', '5', '黑色', '30', 'L');
INSERT INTO `sizecolo` VALUES ('4', '5', '黑色', '35', 'XL');
INSERT INTO `sizecolo` VALUES ('5', '5', '黑色', '40', 'XXL');
INSERT INTO `sizecolo` VALUES ('6', '5', '灰色', '45', 'X');
INSERT INTO `sizecolo` VALUES ('7', '5', '灰色', '50', 'M');
INSERT INTO `sizecolo` VALUES ('8', '5', '灰色', '55', 'L');
INSERT INTO `sizecolo` VALUES ('9', '5', '灰色', '60', 'XL');
INSERT INTO `sizecolo` VALUES ('10', '5', '灰色', '65', 'XXL');

-- ----------------------------
-- Table structure for title
-- ----------------------------
DROP TABLE IF EXISTS `title`;
CREATE TABLE `title` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `stair` varchar(50) NOT NULL COMMENT '一级导航栏',
  `secind` varchar(255) DEFAULT NULL COMMENT '二级导航栏',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of title
-- ----------------------------
INSERT INTO `title` VALUES ('1', '首页', null);
INSERT INTO `title` VALUES ('2', '衬衫', '免烫&易打理&休闲&高支&法兰绒&灯芯绒&牛津纺&牛仔&麻棉&水洗棉&泡泡纱&商务衬衫');
INSERT INTO `title` VALUES ('3', '卫衣', '熊本熊&创可贴&开衫&连帽&圆领&水柔棉');
INSERT INTO `title` VALUES ('4', '外套', '大衣&皮肤衣&C9设计款&夹克&西服&nautilus&羽绒服');
INSERT INTO `title` VALUES ('5', 'T恤', '本广&李翔伟&张广先&药&长场雄&创可贴&周南&山鸟叔&简鱼&欧飞鸿&好小猪&剪纸猪&赵老师的猪&熊本熊&水柔棉T&运动T恤&POLO');
INSERT INTO `title` VALUES ('6', '针织衫', '棉线衫&羊毛衫&空调衫');
INSERT INTO `title` VALUES ('7', '裤装', '针织裤&休闲裤&牛仔裤');
INSERT INTO `title` VALUES ('8', '鞋', '复古跑鞋&帆布鞋&休闲鞋&运动鞋&皮鞋&凉鞋');
INSERT INTO `title` VALUES ('9', '家居配饰', '内衣袜品&家居服&家居鞋&床品套件&被子&毯子&枕&毛巾&手机壳&皮带&箱包');
INSERT INTO `title` VALUES ('10', '新品', null);

-- ----------------------------
-- Table structure for trousers
-- ----------------------------
DROP TABLE IF EXISTS `trousers`;
CREATE TABLE `trousers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL COMMENT '图片',
  `alt` varchar(255) NOT NULL COMMENT '标签',
  `class` varchar(255) NOT NULL COMMENT '类型',
  `price` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of trousers
-- ----------------------------
INSERT INTO `trousers` VALUES ('1', 'index53.jpg', '凡客牛仔裤', '休闲裤', '69');
INSERT INTO `trousers` VALUES ('2', 'index54.jpg', '针织裤', '抵挡锥形 轻弹', '99');
INSERT INTO `trousers` VALUES ('3', 'index55.jpg', '凡客休闲裤 ', '牛仔裤', '69');
INSERT INTO `trousers` VALUES ('4', 'index55.jpg', '凡客休闲裤 轻弹水洗 修身窄脚 男款 藏青色', '重水洗锥形窄脚', '69');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `paw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('44', '123', '1234');
INSERT INTO `user` VALUES ('45', '1234', '123456');
INSERT INTO `user` VALUES ('46', '45', '123');
INSERT INTO `user` VALUES ('47', '7854', '123');
INSERT INTO `user` VALUES ('61', '13367625579', '123456');
INSERT INTO `user` VALUES ('60', '13367625577', '123456');
INSERT INTO `user` VALUES ('50', '8745', '123');
INSERT INTO `user` VALUES ('59', '13367625575', '123456');
INSERT INTO `user` VALUES ('52', '8745', '7845');
INSERT INTO `user` VALUES ('53', '78451', '7845');
INSERT INTO `user` VALUES ('54', '7845', '/7845');
INSERT INTO `user` VALUES ('55', '/7845', '/7845');
INSERT INTO `user` VALUES ('56', '/77845', '/77845');
INSERT INTO `user` VALUES ('57', '/78', '/7845');
INSERT INTO `user` VALUES ('58', '/7845', '/');
INSERT INTO `user` VALUES ('62', '13367625576', '123456');
INSERT INTO `user` VALUES ('63', '13367625578', '123456');

-- ----------------------------
-- Table structure for wearcolor
-- ----------------------------
DROP TABLE IF EXISTS `wearcolor`;
CREATE TABLE `wearcolor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `colorimg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wearcolor
-- ----------------------------
INSERT INTO `wearcolor` VALUES ('1', '5', '黑色', 'listsh05.jpg');
INSERT INTO `wearcolor` VALUES ('2', '5', '灰色', 'lists5.gif');
SET FOREIGN_KEY_CHECKS=1;
