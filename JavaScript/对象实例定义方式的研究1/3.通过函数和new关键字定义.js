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

    this.display= function ( ){
        return `姓名为${this.name}；年龄为${this.age};`;
    }
}

let student = new Student("zhangsan", 20);
console.log(`姓名为${student.name}，年龄为${student.age}`);
console.log(student.display());