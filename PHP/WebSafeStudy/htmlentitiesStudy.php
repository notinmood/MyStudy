<?php
/**
 * @file   : htmlentitiesStudy.php
 * @time   : 15:09
 * @date   : 2021/9/16
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

use Hiland\Utils\IO\ConsoleHelper;

require "../vendor/autoload.php";

/**
 * 将字符编码为html实体.
 * 效果说明:
 * 在cli中能查看到编码后的效果;
 * 在web页面上看不到效果(因为web页面呈现的时候,把html实体又进行了一次转码)
 */


/**
 * 编码 单引号和双引号
 */
$str = "<script>alert('123');a=\"good\"</script>";
echo htmlentities($str, ENT_QUOTES);
ConsoleHelper::echoLine("════════════════════════", true);

/**
 * 编码 双引号(不编码单引号)
 */
$str = "<script>alert('123');a=\"good\"</script>";
echo htmlentities($str, ENT_COMPAT);
ConsoleHelper::echoLine("════════════════════════", true);

/**
 * 对单引号双引号都不进行编码
 */
$str = "<script>alert('123');a=\"good\"</script>";
echo htmlentities($str, ENT_NOQUOTES);
