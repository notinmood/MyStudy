<?php
/**
 * @file   : Bim.php
 * @time   : 9:59
 * @date   : 2021/9/11
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


namespace PHP\Study\PatternStudy\IOC_DI_Practice\Stage01Traditional;

use Hiland\Utils\IO\ConsoleHelper;

class Bim
{
    public function display()
    {
        ConsoleHelper::echoLine("Hello," . __CLASS__);
    }
}