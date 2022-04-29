/**
 * @file   : index.ts
 * @time   : 10:55
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // 1. 通过类型+new() 构建的实例
    interface Human {
        name: string;
        age: number;
    }

    const sem: Human = {name: "zhangsan", age: 30}
    type Sem = typeof sem; // type Sem = Human
    const li: Sem = {name: "lisi", age: 20};
    console.log(li);

    console.log('--typeof someVar 可以赋值给 type 的变量然后再定义变量使用；但不能打印，打印出来就只显示 object 了。--');
    console.log(typeof sem); //object

    //2. 字面量实例
    const someObject = {
        obj: {
            one: 1
        },
        arr: [1, 2, 4],
        num: 1
    }
    type myType = typeof someObject
    //{
    // obj: {
    // one: number;
    // };
    // arr: number[];
    // num: number;
    //}

    // 但打印出来，就是 object
    console.log("但打印出来，就是 object");
    console.log(typeof someObject);//object
}
