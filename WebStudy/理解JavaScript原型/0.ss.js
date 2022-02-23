/**
 * @file   : 0.ss.js
 * @time   : 10:20
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
const Foo = function () {
};

Foo.prototype.data = {a: 1, b: 2};

const f1 = new Foo();
const f2 = new Foo();
const f3 = new Foo();

f1.data.a = 3;

console.log(f2.data.a); // 3<br>　
console.log(f3.data.a);