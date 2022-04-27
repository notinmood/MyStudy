/**
 * @file   : 1.extends三目运算符的使用.ts
 * @time   : 17:55
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace myNS {
    interface Animal {
        live(): void;
    }

    interface Dog extends Animal {
        woof(): void;
    }

    type Example1 = Dog extends Animal ? number : string;// type Example1 = number
    type Example2 = RegExp extends Animal ? number : string;//type Example2= string

    const _name1: Example1 = 123;
    const _name2: Example2 = "qingdao";

    // 以下代码会报错
    // const _name3: Example1 = "qingdao";
    // const _name4: Example2 = 123;
}
