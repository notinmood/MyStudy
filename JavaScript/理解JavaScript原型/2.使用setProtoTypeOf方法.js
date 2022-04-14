/**
 * @file   : 2.使用setProtoTypeOf方法.js
 * @time   : 9:50
 * @date   : 2022/4/14
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let objectA = {};
let objectB = {
    a: "AA",
    b: "BB",
    c: "CC",
};

Object.setPrototypeOf(objectA, objectB);
console.log(objectA);
let {b} = objectA;
console.log(b);
