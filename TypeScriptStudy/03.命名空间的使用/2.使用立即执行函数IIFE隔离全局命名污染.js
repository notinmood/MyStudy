/**
 * @file   : 2.使用立即执行函数 IIFE 隔离全局命名污染.ts
 * @time   : 10:12
 * @date   : 2022/4/24
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 这里 void 0 就是 undefined;其实写 void 123，void "abc"
 * 都一样返回 undefined，大家之所以用 void 0，是因为其代码最少。
 * 但之所以不直接使用 undefined，是因为 undefined 不是关键字，
 * 其可能在其他地方被重新定义，而失去本来的意义。
 */
let Utility = void 0;

// Utility = undefined;

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

