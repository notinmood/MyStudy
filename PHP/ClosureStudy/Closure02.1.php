<?php
/**
 * @file   : Closure02.1.php
 * @time   : 17:00
 * @date   : 2021/8/13
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

class A
{
    public $publicData = "[public] i am public data!";
    private $privateData = "[private] i am private data!";
}

$aaa = new A();

$cfPrivate = function () {
    return $this->privateData;
};

$cfPublic = function () {
    return $this->publicData;
};

//访问私有成员,必须通过第三个参数,将本闭包方法"注入"到这个类型内部.
$rPrivate = Closure::bind($cfPrivate, $aaa, "A");
echo $rPrivate() . PHP_EOL;

$rPrivate = Closure::bind($cfPrivate, $aaa, $aaa);
echo $rPrivate() . PHP_EOL;

$rPrivate = Closure::bind($cfPrivate, $aaa, A::class);
echo $rPrivate() . PHP_EOL;

//访问共有成员,就不必使用第三个参数,将本闭包方法注入进入类型内部了.
$rPublic = Closure::bind($cfPublic, $aaa);
echo $rPublic() . PHP_EOL;
