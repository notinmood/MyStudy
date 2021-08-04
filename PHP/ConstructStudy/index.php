<?php
/**
 * @file: index.php
 * @date: 2021/8/4
 * @time: 9:21
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 说明:
 * 缺省情况下，派生类的构造方法，不会调用基类的构造方法，需要开发人员手工调用。
 * (跟C#（.NET）不同。在C#里面，创建派生类实例的时候，默认除了调用派生类的构造方法，还会调用基类的构造方法)
 */


use PHP\Study\ConstructStudy\MyClassB;

require_once "../vendor/autoload.php";


//$a = new MyClassA();
$b = new MyClassB();
