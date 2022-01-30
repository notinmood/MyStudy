/**
 * @file   : using_GetType.js
 * @time   : 21:04
 * @date   : 2022/1/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let target = 1;
let result = target.toString();
console.log(result);

result = Object.prototype.toString.call(target);
console.log(result);
console.log(typeof (result));