/**
 * @file   : index.js
 * @time   : 17:03
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let exam = {
    name: "Tom",
    age : 24,
    get info() {
        console.log(this.name + this.age);
    }
}
let _name = Reflect.get(exam, 'name');// "Tom"
console.log(_name);


// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
let receiver = {
    name: "Jerry",
    age : 20,
    school:"QDU",
}

/**
 * 如果没有第三个参数，那么 Reflect.get 将在 exam 上执行方法 info，
 * 如果设定第三个参数，那么 Reflect.get 将在 receiver 上执行 exam 的方法 info。
 */
Reflect.get(exam, 'info');
Reflect.get(exam, 'info', receiver); // Jerry20

/**
 * 如果第二个参数为普通的属性，那么是无法调用的到第三个参数上的属性的。
 */
let _school=Reflect.get(exam, 'school', receiver);
console.log(_school);