/**
 * @file   : 2.通过类型和new关键字定义.js
 * @time   : 13:45
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

class Student {
    school = "qingdao";

    constructor(nameInput, ageInput) {
        this.age = ageInput;
        this.name = nameInput;
    };

    display = function () {
        return `姓名为${this.name}；年龄为${this.age};学校为${this.school}`;
    }
}

let student = new Student("zhangsan", 20);
console.log(`姓名${student.name}，年龄${student.age}`);
student.school= "中华小学";
console.log(student.display());