/**
 * @file   : 02.JavaScript访问不存在的成员显示undefined不会抛出异常.js
 * @time   : 12:04
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 特别注意：
// JavaScript 等动态语言访问不存在的变量或者变量成员的时候，不会抛出异常。
// 只会显示 undefined。这个特性不错。
class MyClassA {
    a = "aa";
    b = "bb";
}

const ca = new MyClassA();
console.log(ca.a); //aa
console.log(ca['a']);//aa
console.log(ca['c']);//undefined
