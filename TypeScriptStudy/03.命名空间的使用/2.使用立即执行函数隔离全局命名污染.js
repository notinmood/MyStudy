/**
 * @file   : 2.使用立即执行函数隔离全局命名污染.ts
 * @time   : 10:12
 * @date   : 2022/4/24
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let Utility = void 0;

/**
 * 这是一个 IIFE 函数原型
 */
(function (Utility) {
    // 添加属性至 Utility
})(Utility || (Utility = {}));


(function (Utility) {
    //仅有明确“挂载”为属性的标的，外部才能方法
    Utility.aa = "AA";

    // 在此内定义的其他各种变量，IIFE 外无法访问。
    let bb = "BB";
    const cc = "CC";
})(Utility || (Utility = {}));

console.log(Utility.aa);

// //以下代码会出现错误 - 直接访问 aa
// console.log(aa);

// //以下代码会出现 undefined 未定义错误
// console.log(Utility.bb);

