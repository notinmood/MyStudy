/**
 * @file   : 2.BasicLibrary.JavaScript判断-引用类型和值类型.js
 * @time   : 10:05
 * @date   : 2022/3/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const th = require("basiclibrary.javascript/data/typeHelper");


let myData;

myData = th.isReferenceType(123);
console.log(myData);

myData = th.isReferenceType("123");
console.log(myData);

myData = th.isReferenceType(true);
console.log(myData);

/**
 * 普通的 Date() 函数返回的是一个字符串，肯定是值类型
 */
myData = th.isReferenceType(Date());
console.log(myData);

/**
 * 构造函数 new Date() 返回的是 date对象，肯定是引用类型
 */
myData = th.isReferenceType(new Date());
console.log(myData);

myData = th.isReferenceType([]);
console.log(myData);

myData = th.isReferenceType({});
console.log(myData);

