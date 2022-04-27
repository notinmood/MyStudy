/**
 * @file   : 1.2.extends的级联使用.ts
 * @time   : 6:33
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MY {
    type TypeName<T> =
            T extends string ? string :
                    T extends number ? number :
                            T extends boolean ? boolean :
                                    T extends undefined ? undefined :
                                            T extends Function ? Function :
                                                    object;

    type T0 = TypeName<string>;  // string
    type T1 = TypeName<"a">;  // string
    type T2 = TypeName<true>;  // boolean
    type T3 = TypeName<() => void>;  // Function
    type T4 = TypeName<string[]>;  // object

    const myString: T1 = "value";
    const myValue: T2 = true;
    const _name: T3 = function doSomething() {
        //do something;
    };
}
