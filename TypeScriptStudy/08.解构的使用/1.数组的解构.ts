/**
 * @file   : 1.数组的结构.ts
 * @time   : 10:44
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let arrayValue = [1, 2, 3];
//1. 1vs.1解构。此时我们将 arrayValue 拆成（解构成）三个值，每个值都有对应的值
let [first, second, third] = arrayValue;
console.log(first); //1
console.log(second); //2
console.log(third); //3

//2. 使用剩余参数进行解构
let [one, ...rest] = arrayValue;
console.log(one);
console.log(rest);



