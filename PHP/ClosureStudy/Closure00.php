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
 * 方法原型: Closure::bind($cfs, null, $a);
 *
 * bind的第二个参数为null还是object，取决于第一个闭包是否用到了$this的上下文环境。绑定的对象决定了函数中的$this的取值。
 *
 * 第三个参数如果是类实例对象与类的名称都代表着这个闭包有类作用域(即可以访问类型内的所有控制权限的成员(包括private))，
 * 如果是static则表示这个闭包与外部变量作用域一样，不能访问类的私有以及保护方法。
 *
 * 如果第三个参数是static(省略情况下默认static)，那么作用域不会提升，不能访问类的私有方法。
 * 如果是类名或者类对象，那么该闭包就有着类作用域，可以访问类的私有及受保护的方法；
 * (此时可以理解为,将这个闭包方法注入到类里面了,在类内部当如可以访问类的private成员)
 */

