/**
 * 使用传统的方式（用function）来定义类型以及类型的成员，和调用方式
 * @param name
 * @param age
 * @constructor
 */
function Person(name, age) {
    this.name = name;
    this.age = age;

    /**
     * NNN 要使用匿名函数的方式,给类型定义方法的不可行
     * @returns {*}
     */
    let getName = function () {
        return this.name;
    }

    /**
     * NNN 采用传统的function给类型定义方法，不可行。
     * @param name
     */
    function setName(name) {
        this.name = name;
    }
}

// 给类型定义方法，需要通过prototype的方式。即将类型的方法定义在类的原型上。
Person.prototype.setAge = function (age) {
    this.age = age;
}

Person.prototype.getAge = function () {
    return this.age;
}

let p = new Person("zhangsan", 20);
console.log(p.name);
p.setAge(19);
console.log(p.getAge());

//NNN 以下两个调用在类型内部通过function定义的方法，不可行。
console.log(p.getName());
console.log(p.setName());