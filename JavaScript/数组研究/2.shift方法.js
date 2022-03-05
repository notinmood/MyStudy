/**
 * @file   : 2.shift方法.js
 * @time   : 9:29
 * @date   : 2022/3/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * shift 方法从数组中弹出并返回第一个元素；
 * 原数组中就没有原来的第一个元素了。
 */

let myArray = [9, 1, 3, 4, 7, 0];
let itemPopped = myArray.shift();
console.log(itemPopped);
console.log(myArray);

/**
 * --output--
 * 9
 * [ 1, 3, 4, 7, 0 ]
 */