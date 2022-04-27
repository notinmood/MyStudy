# 说明

## 基础数据类型和包装数据类型

JavaScript 和 TypeScript 中有系统定义好的基础数据类型：
* string
* number
* boolean
* null
* undefined
* symbol
* array
* object
等等，以上这些数据类型称为“基础数据类型”，首字母小写表示。这些数据类型不是 Class 类。

与之相对应的是大写表示的“包装数据类型”：
* String
* Number
* Boolean
* Symbol
* Object
等等。以上这些 Class 类型有以下特点：
1. 无论是简单类型还是复杂类型，都属于引用类型
2. 如果要实例化对象到时候，必须通过 new 关键字

## 类型运算符 typeof
typeof 仅能判断出基础数据类型，无法判断包装的数据类型和自定义数据类型
