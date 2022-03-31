/**
 * @file   : var.js
 * @time   : 8:10
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * var 定义的是一个全局的变量（在 for 循环之外也可以使用的变量）
 * 这 10次循环之间，i 在同一个作用域里面。
 */

const a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10

//要实现目标效果，可以使用闭包锁定每次循环下的i值
const b = [];
for (var i = 0; i < 10; i++) {
    (function (m) {
        b[m] = function () {
            console.log(m);
        };
    })(i);
}

b[6](); // 6