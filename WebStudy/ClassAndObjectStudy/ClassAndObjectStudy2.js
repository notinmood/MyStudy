/**
 * 用ES6的方式，定义类型、类型成员；以及调用方式。
 */
class Person {
    //定义构造函数的时候，使用关键字constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    // 在class内部定义类的方法的时候，不必使用function关键字，直接写方法
    getName() {
        return this.name;
    }

    // 定义类型的方法，用匿名function也可以。
    setName = function (name) {
        this.name = name;
    }
}

// 给类型定义方法，也可以通过prototype的方式。即将类型的方法定义在类的原型上。
Person.prototype.setAge = function (age) {
    this.age = age;
}

Person.prototype.getAge = function () {
    return this.age;
}

let p = new Person("zhangsan", 20);
console.log(p.name);
console.log(p.getAge());
console.log(p.getName());


