/**
 * @file   : 2.在cli中执行.js
 * @time   : 10:36
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 函数用new调用和直接调用

function Man(age) {
    this.sex = "male";
    this.age = age;
}

// // 1.1 以下代码会报错，因为用cli执行的时候（实际是在 node.js 中执行），这个 this 没有可以指向的对象
// let m1 = Man(20);
// console.log(m1);

// // 1.2 也不能直接访问 this.age，因为没有 this 指定的对象
// console.log(this.age);

// 2. 以下代码可以执行，因为用 new 构建了一个对象，this 就指向这个新构建的对象
let m2 = new Man(21);
console.log(m2);

