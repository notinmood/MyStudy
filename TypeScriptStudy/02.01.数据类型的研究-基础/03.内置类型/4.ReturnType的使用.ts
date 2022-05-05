/**
 * @file   : 4.ReturnType的使用.ts
 * @time   : 19:17
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    const add = (x: number, y: number) => x + y;
    type t = ReturnType<typeof add>; // type t = number

    //以下代码会无法通过编译，因为 string 不满足 ReturnType<T> 对 T 的要求，T 必须为函数
    // type other = ReturnType<string>;
}
