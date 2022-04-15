/**
 * @file   : 应用类型和值类型的判断.js
 * @time   : 21:16
 * @date   : 2022/2/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function isReferenceType(value) {
    if (value === null) {
        return true;
    }
    return value instanceof Object;
}

console.log(isReferenceType(123));//false
console.log(isReferenceType(true));//false
console.log(isReferenceType("123"));//false
console.log(isReferenceType(undefined));//false

console.log("─────────────────────────────────────");

console.log(isReferenceType(function doSomething() {
}));//true
console.log(isReferenceType(new Date()));//true
console.log(isReferenceType({}));//true
console.log(isReferenceType([]));//true

console.log('─────────────────────────────────────');

console.log(isReferenceType(Number(123)));//false
// noinspection all
console.log(isReferenceType(new Number(123)));//true

console.log('─────────────────────────────────────');

console.log(typeof null);//object
console.log(isReferenceType(null));//true
