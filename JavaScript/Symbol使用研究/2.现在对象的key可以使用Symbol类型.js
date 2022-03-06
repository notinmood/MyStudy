/**
 * @file   : 2.现在对象的key可以使用Symbol类型.js
 * @time   : 16:54
 * @date   : 2022/3/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 注意打印出的结果里：
 *      1.属性名称 [Symbol(sa)] 上面没有引号，他不是一个字符串。
 *      2.有两个 key 为 [Symbol(sa)] 的属性，value 也有两个不同的值。
 *      (这两个key 看似相同，其实不同：因为任何 Symbol 对象都不相同，所以这是两个不同的 key)
 */

let myObject = {};
myObject["a"] = "AA";
myObject[Symbol("sa")] = "qingdao";
myObject[Symbol("sa")] = "beijing";

console.log(myObject);
// { a: 'AA', [Symbol(sa)]: 'qingdao', [Symbol(sa)]: 'beijing' }
