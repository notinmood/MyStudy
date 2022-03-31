/**
 * @file   : rr.js
 * @time   : 10:39
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

console.log("1. 如果是实时执行的代码，那么在 for 内可以得到 var 定义的变量 i");
const myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(i);
}

console.log(i);//10。 这是循环完成后，i最后的值10。
console.log(myArray);

//─────────────────────────────────────

console.log("2. 如果是非实时执行的代码，那么在 for 内无法使用 var 关键字定义变量 i");
const yourArray = [];
for (var i = 0; i < 10; i++) {
    yourArray.push(function () {
        console.log(i)
    });
}

console.log(i);//10。 这是循环完成后，i最后的值10。
yourArray[6]();//10

//─────────────────────────────────────
console.log("3. 用 闭包可以实现 实时分配 变量的效果");
const threeArray = [];
for (var i = 0; i < 10; i++) {
    (function (j) {
        threeArray.push(function () {
            console.log(j)
        });
    })(i);//把变量 i 传进去，并立即执行。这样能保留住当前的 i 值。
}

console.log(i);//10。 这是循环完成后，i最后的值10。
threeArray[6]();//6

//─────────────────────────────────────
console.log("4. 用 let 也可以轻松实现目标效果。");
const fourArray = [];
for (let m = 0; m < 10; m++) {
    fourArray.push(function () {
        console.log(m)
    });
}

//console.log(m);//因为 let 设置的变量有作用域，此处无法读取到 m。
fourArray[6]();//6