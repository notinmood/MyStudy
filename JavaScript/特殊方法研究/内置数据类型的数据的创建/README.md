# 说明
JavaScript 内置数据类型数据信息的创建有 2种方式：
1. 使用的跟类型同名的普通函数(创建的是内置类型的数据)
2. 使用类型的构造函数(创建的是一个 Object实例)

具体如下：
1. 几种简单的值类型（Number、String、Boolean）
   1. 使用不带 new 的普通函数创建出来的是具体的某种类型数据
       ```javascript
       let myString1 = String("Qingdao City");
       console.log(myString1); // Qingdao City
       ```
   2. 使用带 new 的构造函数创建出来的是 Object 类型的实例
      ```javascript
      let myString2 = new String("Qingdao City");
      console.log(myString2);// [String: 'Qingdao City']
      `````
      注：console.log()打印出来的带 [] 的数据，表示对象实例。
2. 引用类型(Array、Object)，使用普通函数和构造函数创建出来的都是对象实例，两者效果一样。
3. 引用类型(Date)
   1. 使用普通函数创建的是一个字符串
   ```javascript
   let myDate1 = Date();
   console.log(myDate1); // Fri Mar 04 2022 19:25:32 GMT+0800 ( 中国标准时间)
   console.log(typeof myDate1);// string
   ```
   2. 使用构造函数创建的是一个对象实例
   ```javascript
   let myDate2 = new Date();
   console.log(myDate2); //2022-03-04T11:25:32.553Z
   console.log(typeof myDate2); //object
   `````````
   
4. ES6的新数据类型(Symbol),仅支持普通函数方式，不支持构造函数方式。Symbol 是为一个不支持 new 构造函数的内置数据类型。
```javascript
let mySymbol = Symbol();
console.log(mySymbol); //Symbol()
// let s1 = new Symbol(); // 会报错
// console.log(s1);
`````````
