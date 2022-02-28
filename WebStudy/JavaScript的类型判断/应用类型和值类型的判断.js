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

console.log(isReferenceType(123));

console.log(isReferenceType(true));

console.log(isReferenceType("123"));

console.log(isReferenceType(undefined));


console.log(isReferenceType(function doSomething() {
}));

console.log(isReferenceType(new Date()));

console.log(isReferenceType({}));

console.log(isReferenceType([]));

console.log(isReferenceType(Number(123)));
// noinspection all
console.log(isReferenceType(new Number(123)));


// @formatter:off
let a =   123;
// @formatter:on


console.log(typeof null);
console.log(isReferenceType(null));

