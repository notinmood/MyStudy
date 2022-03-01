//{'name': 'zhangsan', 'sex': 'male', 'age': 20}

let myObject = {'name': 'zhangsan', 'sex': 'male', 'age': 20};
let myObject2 = Object({'name': 'zhangsan', 'sex': 'male', 'age': 20});
let myObject3= new Object({'name': 'zhangsan', 'sex': 'male', 'age': 20});

console.log(myObject.name);
console.log(myObject['age']);

console.log(myObject2.name);
console.log(myObject2['age']);

console.log(myObject3.name);
console.log(myObject3['age']);
// console.log(typeof myObject3)
// console.log(myObject3);

let myObject_tt= new Object(11);
console.log(typeof myObject_tt)
console.log(myObject_tt)

myObject_tt= new Object("hello");
console.log(typeof myObject_tt)
console.log(myObject_tt)

myObject_tt= new Object(true);
console.log(typeof myObject_tt)
console.log(myObject_tt)

console.log("============================================")
let myArray= ['one','two','three'];
let myArray2= Array(1,2,3);
let myArray3= new Array(1,2,3);
console.log(myArray[0]);
console.log(myArray2[0]);
console.log(myArray3[0]);



[ppp]