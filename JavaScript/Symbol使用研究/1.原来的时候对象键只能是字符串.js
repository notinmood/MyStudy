/**
 * @file   : 1.原来的时候对象键只能是字符串.js
 * @time   : 17:12
 * @date   : 2022/3/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 对象在 JavaScript 语言中扮演重要角色，它们的使用无处不在。对象通常用作键/值对的集合。
// 然而，以这种方式使用它们有一个很大的限制: 在 symbol 出现之前，对象键只能是字符串，
// 如果试图使用非字符串值作为对象的键，那么该值将被强制转换为字符串，如下：
// (如果key非常明确就是字符串，那么可以不加引号。加了引号，显示出来的时候也不带引号)

const obj = {};
obj.foo = 'foo';
obj['bar'] = 'bar';
obj[2] = 2;
obj[{}] = 'something';
console.log(obj);
// { '2': 2, foo: 'foo', bar: 'bar','[object Object]': 'something' }

/**
 * 以下代码着重演示用对象作为key的时候，这个对象是要转换成字符串的。
 * 1. 首先我们看到 o1 和 o2 是两个独立的对象
 * 2. 当用 o1 和 o2 作为 key 的时候，需要将他们转成字符串，
 *      但是 o1 和 o2 转成字符串后是一样的 '[object Object]'，
 *      所以第二次赋值到时候，就把第一次赋值的结果覆盖了。
 *      (即，最后打印出的 myObject 对象，是看不到 value为 001 这个属性的)
 */
let myObject = {};
let o1 = {};
let o2 = {};
if (o1 == o2) {
    console.log("YYY两个{}对象是相等的");
} else {
    console.log("NNN两个{}对象是不相等的");
}
myObject[o1] = "OO1";
myObject[o2] = "OO2";

console.log(myObject);
// { '[object Object]': 'OO2' }