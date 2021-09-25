import "../Utils/StringHelper.js"

//两种调用方式
let template1 = "我是{0}，今年{1}了.";
let result1 = template1.format("zhangsan", 22);

let template2 = "我是{name}，今年{age}了.";
let result2 = template2.format({name: "zhangsan", age: 22});

/**
 * 字符串的格式化,建议使用 `` 这种方式内写占位符
 */

let key = "myKey";
let value = "myValue";
let result3 = `key is ${key};and value is  ${value}.`;

console.log(result1, result2, result3);

let original = "I love u!"
// let target = "!u evol I";
let actual = original.reverse();
console.log(actual);