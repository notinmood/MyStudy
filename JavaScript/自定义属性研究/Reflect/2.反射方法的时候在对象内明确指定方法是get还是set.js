/**
 * @file   : 2.反射的时候明确是get还是set方法.js
 * @time   : 17:48
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let exam = {
    name: "Tom",
    age : 24,
    set info(value) {
        return this.age = value;
    }
}

console.log(exam.age);// 24

Reflect.set(exam, 'age', 25); // true
console.log(exam.age); // 25

// value 为 undefined 时会将 name 属性清除
Reflect.set(exam, 'age', undefined); // true
console.log(exam.age); // undefined


// 当 target 对象中存在 name 属性 setter 方法时，setter 方法中的 this 会绑定 receiver
// 所以修改的实际上是 receiver 的属性
let receiver = {
    age: 18
}
Reflect.set(exam, 'info', 1, receiver); // true
console.log(exam.age); //还是原来的值，没有改变
console.log(receiver.age);  // 1

/**
 * 初始到时候，不给 receiver1 定义 age 属性，通过 set 会自动为其添加 age 属性
 */
let receiver1 = {
    name: 'hi',
}
Reflect.set(exam, 'info', 1, receiver1);
console.log(receiver.age) // 1