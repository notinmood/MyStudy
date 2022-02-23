/**
 * @file   : 3.通过函数和new关键字定义.js
 * @time   : 13:54
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 在 JavaScript 中对普通函数使用 new 关键字调用，会创建一个独立的对象
// +--------------------------------------------------------------------------

function Student(name, age) {
    this.age = age;
    this.name = name;
}

let student = new Student("zhangsan", 20);
console.log(`姓名${student.name}，年龄${student.age}`);