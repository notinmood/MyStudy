/**
 * @file   : 9.综合.ts
 * @time   : 23:22
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    const a = {
        a: '1',
        b: '2',
        c: '3'
    };

    type t<T> = { [K in keyof T]: T[K] }[keyof T];
    type forA = t<typeof a>; //"1" | "2" | "3"
}
