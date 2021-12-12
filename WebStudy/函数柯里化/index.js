// 什么是函数柯里化
// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成
// 接受一个单一参数(最初函数的第一个参数)的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。
// 这个技术以逻辑学家 Haskell Curry 命名的。

// 参考 https://www.cnblogs.com/bidong/p/15498133.html

let original = function (a, b, c, d) {
    return a + b + c + d;
};

let curry = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            };
        }
    };
};


let c1 = curry(2);
let c2 = c1(3);
let c3 = c2(4);
let c4 = c3(5);
console.log(c3);
console.log(c4);