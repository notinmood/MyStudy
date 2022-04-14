/**
 * @file   : 9.new命令的实质.js
 * @time   : 10:27
 * @date   : 2022/4/14
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| new 命令通过构造函数新建对象实例的过程，
// |::一一·| 其本质是将实例的原型，指向了构造函数的 prototype 属性，然后在实例上执行构造函数。
// +--------------------------------------------------------------------------

function Person(name) {
    this.name = name;
}

console.log(Person.prototype);

// var p = new Person("zhangsan");
// 等同于将构造函数的原型对象赋给实例对象p的属性__proto__
// 我们可以发现，以下代码中的 p 和 m 是一样的。
let p = {};
p.__proto__ = Object.setPrototypeOf({}, Person.prototype);
Person.call(p, "zhangsan");
console.log(p);

const m = new Person("zhangsan");
console.log(m);

// 版权声明：本文为CSDN博主「zljhdu」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/zljhdu/article/details/78765241
