/**
 * @file   : 0.入门.js
 * @time   : 6:41
 * @date   : 2022/4/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function Person(name, height) {
    this.name = name;
    this.height = height;
}

Person.prototype.hobby = function () {
    return 'watching movies';
}

var boy = new Person('keith', 180);
var girl = new Person('rascal', 153);
console.log(boy.name); //'keith'
console.log(girl.name); //'rascal'
console.log(boy.hobby === girl.hobby); //true

// 上面代码中，如果将hobby方法放在原型对象上，那么两个实例对象都共享着同一个方法。
// 我希望大家都能理解的是:
// 1. 对于构造函数来说，prototype是作为构造函数的属性；
// 2. 对于对象实例来说，prototype是对象实例的原型对象。
// 所以prototype即是属性，又是对象。
