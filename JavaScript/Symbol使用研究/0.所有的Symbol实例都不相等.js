/**
 * @file   : 0.所有的Symbol实例都不相等.js
 * @time   : 19:25
 * @date   : 2022/3/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let sa = Symbol();
let sb = Symbol();

if (sa == sb) {
    console.log("YY 相等");
} else {
    console.log("NN 不等");
}

// --output--
// NN 不等
