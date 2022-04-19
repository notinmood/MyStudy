/**
 * @file   : 5.使用Symbol作为对象的属性跟普通字符串的不同表示方式.js
 * @time   : 11:45
 * @date   : 2022/4/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| symbol 类型的属性名称，一定要用[]定义和调用，[]内的名称不能有引号（否则就是普通字符串类型的属性名称了）。
// +--------------------------------------------------------------------------
const sa = Symbol();

const myObject5 = {
    sa  : "qingdao",
    "sa": "shanghai",
    [sa]: "beijing",
};

console.log(myObject5["sa"]);
console.log(myObject5[sa]);
