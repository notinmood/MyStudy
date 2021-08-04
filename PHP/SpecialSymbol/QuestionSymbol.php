<?php
/**
 * @user: ShanDong Xiedali
 * @date: 2021/8/4
 * @time: 7:44
 * @company: 海澜&润拓
 */

$myArray['a'] = 'AA';
$myArray['b'] = "BB";
$myArray['c'] = "";
$myArray['d'] = [];

$target = $myArray['d'] ?: 'NNN';
echo $target;



$pp = $myArray['d'] ?? 'NNN';
echo "$pp";

