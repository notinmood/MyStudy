/**
 * @file   : 4.通过 as 实现键名重新映射.ts
 * @time   : 8:28
 * @date   : 2022/5/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // 语法
    // type MappedTypeWithNewProperties<Type> = { [Properties in keyof Type as NewKeyType]: Type[Properties] }

    type Getters<T> = { [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property] };

    interface Person {
        name: string;
        age: number;
        location: string;
    }

    type LazyPerson = Getters<Person>;
    //{getName: () => Person["name"], getAge: () => Person["age"], getLocation: () => Person["location"]}
}

