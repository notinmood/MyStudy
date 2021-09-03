<?php
require "../vendor/autoload.php";

use Hiland\Utils\IO\ConsoleHelper;


ConsoleHelper::echoLine("hello");
ConsoleHelper::echoLine("￥￥￥￥￥");
ConsoleHelper::echoLine(DIRECTORY_SEPARATOR);//同一个路径内的,多个目录与子目录怎么隔离
ConsoleHelper::echoLine(PATH_SEPARATOR); //多个路径时候,怎么隔离这些路径