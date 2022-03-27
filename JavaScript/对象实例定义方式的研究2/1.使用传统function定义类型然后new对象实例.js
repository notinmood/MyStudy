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
     * NN 要使用匿名函数的方式,给类型定义方法的不可行
     * @returns {*}
     */
    let getName = function () {
        return this.name;
    }

    /**
     * YY 通过 this 使用匿名的方式定义类型的成员方法
     * @return {*}
     */
    this.displayName = function () {
        return this.name;
    }


    /**
     * NN 采用传统的 function 给类型定义方法，不可行。
     * NN 无法使用 this 和传统的 function 方式为类型定义成员方法。
     * @param name
     */
    function setName(name) {
        this.name = name;
    }
}

/**
 * 虽然可以在类型内部，通过 this 为类型定义成员方法；
 * 但更建议使用原型的方式为类型定义成员方法。
 */
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

// //NNN 以下两个调用在类型内部通过function定义的方法，不可行。
// console.log(p.getName());
// console.log(p.setName());

console.log(p.displayName());