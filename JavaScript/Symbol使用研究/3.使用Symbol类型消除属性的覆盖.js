/**
 * @file   : 2.现在对象的key可以使用Symbol类型.js
 * @time   : 16:54
 * @date   : 2022/3/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 只要使用 Symbol 作为对象的 key，
 * 那么无论 Symbol 内的标识字符串是否相同，
 * 对象的各个属性都独立的属性，不会彼此覆盖。
 * */

// +--------------------------------------------------------------------------
// |::说明·| Symbol实例的不可变更的特性,是要在两个及两个以上的作用域中才能体现出来,请参考 代码4
// +--------------------------------------------------------------------------

let myObject = {};
myObject["a"] = "AA";
let sa = Symbol("my");
let sb = Symbol("my");

myObject[sa] = "qingdao";
myObject[sb] = "beijing";

console.log(myObject);
// { a: 'AA', [Symbol(my)]: 'qingdao', [Symbol(my)]: 'beijing' }

console.log(myObject[sa]);//qingdao
console.log(myObject[sb]);//beijing

