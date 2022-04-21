/**
 * @file   : 1.普通构造函数.ts
 * @time   : 11:46
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export class Foo {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const foo = new Foo("qingdao");
console.log(foo.getName());
