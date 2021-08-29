<?php
/**
 * @file   : biz.php
 * @time   : 11:37
 * @date   : 2021/8/23
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

use Hiland\Utils\Environment\EnvHelper;
use Hiland\Utils\IO\ConsoleHelper;
use Hiland\Utils\Web\RequestHelper;

require "../vendor/autoload.php";

echo "是否为ThinkPHP环境:";
echo ConsoleHelper::echoBool(EnvHelper::isThinkPHP());
echo EnvHelper::getNewLineSymbol();

if (RequestHelper::isPost()) {
    echo "YYY post";
} else {
    echo "NNN post";
}

echo EnvHelper::getNewLineSymbol();

// $isPost = isPost();
// echo "是否为Post请求:";
// ConsoleHelper::echoBool($isPost);
// echo EnvHelper::getNewLineSymbol();

if (RequestHelper::isGet()) {
    echo "YYY get";
} else {
    echo "NNN get";
}
echo EnvHelper::getNewLineSymbol();

echo "Hello World!";

function isPost()
{
    return ($_SERVER['REQUEST_METHOD'] == 'POST' && (empty($_SERVER['HTTP_REFERER']) || preg_replace("~https?:\/\/([^\:\/]+).*~i", "\\1", $_SERVER['HTTP_REFERER']) == preg_replace("~([^\:]+).*~", "\\1", $_SERVER['HTTP_HOST']))) ? 1 : 0;
}