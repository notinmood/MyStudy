/**
 * @file   : index.js
 * @time   : 19:50
 * @date   : 2022/1/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * - apply：调用当前对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, argumentArray);即A对象应用B对象的方法。
 * - call：调用当前对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2,…);即A对象调用B对象的方法。
 * - bind：将当前对象的方法，绑定到另外一个对象上。（只是完成绑定，不会执行。需要执行的时候，需要再加一个（））。
 *
 * 通过以下代码可以看出call()、apply()、bind() 都是用来重定义 this 这个对象的（都是将原来的person对象换成了worker对象）！
 */

let person = {
    name    : "zhangsan",
    age     : 20,
    sayHello: function (target) {
        return `${target}你好，我的名字是 ${this.name},年龄为${this.age}`;
    }
};

let worker = {
    name: "lisi",
    age : 30,
};

console.log("--以下是原始信息");
let result = person.sayHello("领导");
console.log(result);
console.log("--以下是使用 apply 的信息");
result = person.sayHello.apply(worker, ["领导"]);
console.log(result);
console.log("--以下是使用 call 的信息");
result = person.sayHello.call(worker, "领导");
console.log(result);
console.log("--以下是使用 bind 的信息");
result = person.sayHello.bind(worker, "领导")();
console.log(result);

// 以下是输出结果
// --以下是原始信息
// 领导你好，我的名字是 zhangsan,年龄为20
// --以下是使用 apply 的信息
// 领导你好，我的名字是 lisi,年龄为30
// --以下是使用 call 的信息
// 领导你好，我的名字是 lisi,年龄为30
// --以下是使用 bind 的信息
// 领导你好，我的名字是 lisi,年龄为30
