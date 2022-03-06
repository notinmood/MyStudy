/**
 * @file   : 4.在多个代码作用域才能体现出Symbol可以消除成员的覆盖.js
 * @time   : 20:54
 * @date   : 2022/3/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// Symbol实例的不可变更的特性,是要在两个及两个以上的作用域中才能体现出来.请看下面的代码.

let a = Symbol();
const obj = {};

{
    obj[a] = 10;
}

{
    let a = Symbol();
    obj[a] = 20;
    console.log(obj[a]);
}


console.log(obj[a]);//10

console.log(obj); //Object {Symbol(): 10, Symbol(): 20}
