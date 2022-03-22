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
    },

    display() {
        console.log(this.name + this.age);
    },
}

// +--------------------------------------------------------------------------
// |::说明·| 1. 使用Reflect 直接反射对象的成员
// +--------------------------------------------------------------------------
let _name = Reflect.get(exam, 'name');
console.log(_name);// "Tom" # 跟直接调用 exam.name 的效果一样
console.log(exam.name);// "Tom"


// 当 target 对象中存在使用了 this 的 getter 方法，
// getter 方法的 this 可以绑定到第三个参数 receiver 上。
let receiver = {
    name  : "Jerry",
    age   : 20,
    school: "QDU",
}


// +--------------------------------------------------------------------------
// |::说明·| 2. 使用 Reflect 在第三个对象上调用第一个对象target上的带有get性质的方法成员，
// |::一一·|    那么就类似于 apply 的功能。
// +--------------------------------------------------------------------------

console.log("──YY调用带 get 的方法─────────");
/**
 * 如果没有第三个参数，那么 Reflect.get 将在 exam 上执行方法 info，
 * 如果设定第三个参数，那么 Reflect.get 将在 receiver 上执行 exam 的方法 info。
 */
Reflect.get(exam, 'info'); // Tom24
Reflect.get(exam, 'info', receiver); // Jerry20

console.log("──NN调用不带 get 的方法───────");
Reflect.get(exam, "display");
Reflect.get(exam, "display", receiver);


/**
 * 如果第二个参数为普通的属性，那么是无法调用的到第三个参数上的属性的。
 */
console.log("──普通属性无法使用第三个参数──");
let _age = Reflect.get(exam, 'age', receiver);
console.log(_age); // 24 //还是第一个参数上的属性成员，不是第三个参数的属性成员

let _school = Reflect.get(exam, 'school', receiver);
console.log(_school); // undefined //因为第一个参数上根本就没有 school 属性