/**
 * @file   : var3.类型可以作为作用域.js
 * @time   : 15:35
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 类型内部定义的变量称为属性，属性（包括方法，都不能再用var，function修饰了）。
 */

class Var3 {
    myName = "qingdao";

    say() {
        console.log("something!");
    };
}