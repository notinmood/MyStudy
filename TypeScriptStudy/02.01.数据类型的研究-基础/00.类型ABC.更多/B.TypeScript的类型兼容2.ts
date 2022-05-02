/**
 * @file   : B.TypeScript的类型兼容2.ts
 * @time   : 10:31
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


/**
 * @file   : B.TypeScript的类型兼容.ts
 * @time   : 10:22
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// TypeScript里的类型兼容性是基于结构的:
// 如果两个类型的结构是兼容的，那么无论这两个类型是否有继承派生关系，他们都是兼容的。

export namespace MyNameSpace {
    class Cat {
        name: string = "cat";

        walk() {
            console.log("cat walk.");
        }
    }

    class KittyCat {
        name: string = "KittyCat";

        walk() {
            console.log("KittyCat walk.");
        }

        play() {
            console.log("play");
        }
    }

    /**
     * 1. 因为类型 KittyCat 兼容于类型 Cat，
     * 因此虽然是用类型 Cat 声明的变量 a，但赋值的时候依然可以用 KittyCat 的实例；
     */
    let a: Cat;
    a = new Cat();
    a = new KittyCat();

    /**
     * 2. 因为类型 Cat 不兼容于类型 KittyCat，
     * 因此是用类型 KittyCat 声明的变量 b，但不能用 Cat 的实例进行赋值；
     */
    let b: KittyCat;
    b = new KittyCat();
    // 以下代码会报错
    // b = new Cat();
}
