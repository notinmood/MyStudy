/**
 * @file   : index.ts
 * @time   : 13:32
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export class Foo {
    constructor(private _name: string) {
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const foo = new Foo("qingdao");
foo.name = "beijing";
console.log(foo.name);
