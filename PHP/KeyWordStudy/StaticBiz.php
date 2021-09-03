<?php
/**
 * @file   : StaticStudy.php
 * @time   : 7:07
 * @date   : 2021/9/3
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


namespace PHP\Study\KeyWordStudy;

class StaticStudy
{
    /**
     * 静态实例
     * @var StaticStudy
     */
    public static $instance;

    /**
     * 实例成员
     * @var string
     */
    public $myName;

    /**
     * @return StaticStudy
     */
    public static function getInstance(): StaticStudy
    {
        //调用静态成员的时候,static的作用和self一样的.
        if (!static::$instance) {
            static::$instance = new static();
        }

        return self::$instance;
    }

}