<?php
/**
 * @file   : Closure00.php
 * @time   : 15:47
 * @date   : 2021/8/12
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 同文件演示的是,通过第三个参数,将闭包函数注入到类型内部,访问类型的静态成员
 */
class A
{
    private static $sfoo = 1;
}

/**
 * 静态闭包函数
 * @return int
 */
$cfs = static function () {
    return A::$sfoo;
};

/**
 * 实例闭包函数
 * @return int
 */
$cfe = function () {
    return A::$sfoo;
};


//这段代码可以正常执行.是因为以下代码把 $cl1 放入A类型内部了.在类型内部调用private的变量当然可以.
$vcf = Closure::bind($cfs, null, 'A');
echo $vcf() . PHP_EOL;

$a = new A();
$vcf = Closure::bind($cfs, null, $a);
echo $vcf() . PHP_EOL;

$vcf = Closure::bind($cfs, null, new A);
echo $vcf() . PHP_EOL;

$vcf = Closure::bind($cfe, null, A::class);
echo $vcf() . PHP_EOL;