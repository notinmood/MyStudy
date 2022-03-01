let myObject = {
    "_sex": "male",
};

//1、给对象定义属性的一般方法
myObject["Name"] = "zhangsan";

console.log(`对象的名字为: ${myObject.Name}`);

myObject["Name"] = "张三";
console.log(`对象的名字为: ${myObject.Name}`);

//2、通过Object.defineProperty定义只能读取的属性
Object.defineProperty(myObject, "sex", {
    get: function () { return myObject._sex; },
    // set: function (newValue) { myObject._sex = newValue; },
    enumerable: true,
    configurable: true,
});

console.log(`对象的性别为: ${myObject.sex}`);

myObject.sex = 'female';
console.log(`对象的性别为: ${myObject.sex}`);