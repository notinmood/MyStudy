/**
 * @file   : 2.在类型内使用.ts
 * @time   : 14:15
 * @date   : 2022/4/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
const mySymbolName = Symbol();

class MyClass {
    [mySymbolName]() {
        console.log("我是一个函数内的信息");
    }
}

const myObj = new MyClass();

/**
 * 通过Symbol定义的实例成员，只能通过[]调用
 */
myObj[mySymbolName]();
// myObj.mySymbolName();
