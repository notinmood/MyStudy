/**
 * @file   : 2.对象解构.js
 * @time   : 9:45
 * @date   : 2022/3/24
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let student = {
    "name"  : "zhangsan",
    "age"   : 20,
    "school": "中华小学",
    "sayMe" : function () {
        return "我是一个小学生！";
    }
};

const {name, age, sayMe} = student;

// 经过解构的变量 name,age 可以直接使用
console.log(name);
console.log(age);
console.log(sayMe());

// 以下变量 school 没有经过解构，无法直接使用
// console.log(school);