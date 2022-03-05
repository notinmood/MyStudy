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