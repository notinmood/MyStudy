<?php

namespace Misc;

/**
 *  => 数组中元素赋值符号的使用
 * Class ArrayItemAssign
 * @package Misc
 */
class ArrayItemAssign
{
    public static function composeArray(): array
    {
        $myArray= [];
        $myArray = ['a' => 'AA', b => 'BB'];
        $myArray['c'] = "CC";

        return $myArray;
    }
}


var_dump( ArrayItemAssign::composeArray());