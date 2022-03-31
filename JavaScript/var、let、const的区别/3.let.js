/**
 * @file   : index.js
 * @time   : 8:08
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * let 定义的是一个内部变量（在 for 循环之外不可以使用的变量）
 * 每一次循环，i 分别在一个独立的作用域里面。
 */

const a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6