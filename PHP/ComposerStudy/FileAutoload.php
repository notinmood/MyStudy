<?php
/**
 * @file: FileAutoload.php
 * @time: 9:39
 * @date: 2021/8/10
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

require "../vendor/autoload.php";

/**
 *测试 composer.json内自动加载php文件,而实现的功能.
 */
sayHi("zhangsan");
echo PHP_EOL;
sayBye("zhangsan");
echo PHP_EOL;
echo getName("zhang", "san");