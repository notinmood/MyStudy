/**
 * JavaScript中给对象内部指定方法:
 * 1、可以使用匿名函数;
 * 2、也可以使用普通函数(但不能有 function 关键字)
 */

let student = {
    name: "zhangsan",
    age: 20,

    /**
     * 给对象内部指定方法,1、可以使用匿名函数
     * @returns {string}
     */
    getName: function () {
        return this.name;
    },

    /**
     * 给对象内部指定方法,2、也可以使用普通函数(但不能有function关键字)
     * @returns {number}
     */
    getAge() {
        return this.age;
    },
};

console.log(student.getName());
console.log(student.getAge());