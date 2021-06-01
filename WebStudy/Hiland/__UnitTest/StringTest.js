//TODO:如何导入带路径的文件
import '/Hiland/Utils/StringHelper'

//两种调用方式
let template1="我是{0}，今年{1}了";
let result1=template1.format("zhangsan",22);

let template2="我是{name}，今年{age}了";
let result2=template2.format({name:"zhangsan",age:22});

console.log(result1,result2);