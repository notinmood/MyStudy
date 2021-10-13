<?php
/**
 * @file   : index.php
 * @time   : 16:58
 * @date   : 2021/10/13
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

use PHP\Study\MagicMethodStudy\Call_callStatic\Student;

require "../../vendor/autoload.php";

$student = new Student("张三", 22);
echo $student->getMyName();

/**
 * getFullName并不会直接调用student的方法getFullName,因为getFullName是private可见的.
 * 此处getFullName是调用student内的__call,然后通过__call再调用student内的私有方法getFullName
 */
echo $student->getFullName();

$student->welcomeName();

/**
 * 访问一个没有定义的静态方法,将调用Student内定义的__callStatic方法
 */
echo PHP_EOL . Student::getFoo();