let p= {'name':"zhangsan",'age':20,'school':'青岛大学'};
console.log('原始的数据类型为:'+typeof p);
console.log(p);

let json_s = JSON.stringify(p);
console.log('stringify转换后的类型为:'+typeof json_s);
console.log(json_s);

let json_o= JSON.parse(json_s);
console.log('parse再次转换后的类型为：'+ typeof json_o);
console.log(json_o);

//output----------------
// 原始的数据类型为:object
// { name: 'zhangsan', age: 20, school: '青岛大学' }
// stringify转换后的类型为:string
// {"name":"zhangsan","age":20,"school":"青岛大学"}
// parse再次转换后的类型为：object
// { name: 'zhangsan', age: 20, school: '青岛大学' }

