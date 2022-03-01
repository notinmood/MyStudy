/**
 * @file   : 2.通过类型和new关键字定义.js
 * @time   : 13:45
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

class Student {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

let student = new Student("zhangsan", 20);
console.log(`姓名${student.name}，年龄${student.age}`);