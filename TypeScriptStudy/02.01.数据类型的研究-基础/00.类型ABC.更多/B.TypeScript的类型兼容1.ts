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

    class Dog {
        name: string = "dog";

        walk() {
            console.log("dog walk.");
        }
    }

    /**
     * 因为 Cat 和 Dog 类型是兼容的（本例中两个类型的结构是相同的），
     * 因此虽然是用类型 Cat 声明的变量 a，但赋值的时候依然可以用 Dog 的实例
     */
    let a: Cat;
    a = new Cat();
    a = new Dog();
}
