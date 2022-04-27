/**
 * @file   : 4.ReturnType和infer.ts
 * @time   : 12:10
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export namespace M {
    const add = (x: number, y: number) => x + y;
    type t = ReturnType<typeof add>;// type t = number
    let _name: t = 123;

    /**
     *
     */
    console.log(_name);
}

