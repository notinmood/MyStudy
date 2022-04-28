/**
 * @file   : index.ts
 * @time   : 10:55
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
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


}
