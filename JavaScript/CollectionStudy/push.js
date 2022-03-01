let myObject = {'name': 'zhangsan', 'sex': 'male', 'age': 20};
let myArray = ['one', 'two', 'three'];
let mySomething ;


// //给一个object进行push的时候，会出错。
// myObject.push({"class": "A"});
// console.log(myObject)

myArray.push("four");
console.log(myArray);
//--output--------------------------
// [ 'one', 'two', 'three', 'four' ]

// //undefined 对象也不能push元素进去
// mySomething.push('a');
// console.log(mySomething);

let mm={};
console.log(mm['X'])
mm= {['X']:mm['X']||[]};
console.log(mm);

mm= {['X']:mm['X']||[]};
console.log(mm);

mm['X'].push('a');
console.log(mm);
mm['X'].push('b');
console.log(mm);



