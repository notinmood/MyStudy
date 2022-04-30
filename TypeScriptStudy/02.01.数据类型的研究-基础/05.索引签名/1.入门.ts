/**
 * @file   : 1.入门.ts
 * @time   : 20:23
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    //══ 1. 简单的索引签名════════════════════════
    const foo: {
        //foo 成员的key 是 string 类型；value 又是一个 {}对象
        // - {}对象内必须有一个 key 的名称为 message，值为 string 类型数据的成员。
        [index: string]: { message: string };
    } = {};

    const bar: {
        //bar 成员的key 为 string 类型；value 为 number 类型。
        [index: string]: number;
    } = {};

    // 储存的东西必须符合结构
    foo["a"] = {message: 'some message'};
    bar["age"] = 20;

    //══2.独立 type 定义的索引签名════════════════════════
    type myType = { [index: string]: string | number, id: number, name: string };
    const myData: myType = {
        id  : 20,
        name: "zhangsan",
    };


    let myTarget: myType;
    /**
     * 变量 myValue1 满足类型 myType 的签名，可以赋值给类型 myType 的变量 myTarget
     */
    const myValue1 = {id: 21, name: "lisi"};
    myTarget = myValue1;


    /**
     * 变量 myValue2 不满足类型 myType 的签名，所以不可以赋值给类型 myType 的变量 myTarget
     */
    const myValue2 = {id: 22, age: 20};
    // myTarget= myValue2;
}

