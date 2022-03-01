<?php
/**
 * @file   : 快速获取数组中的元素.php
 * @time   : 16:04
 * @date   : 2022/3/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

$myArray = [1, 3, 5, 7];
[$a, $b, $c] = $myArray;

var_dump($a);
var_dump($b);
var_dump($c);