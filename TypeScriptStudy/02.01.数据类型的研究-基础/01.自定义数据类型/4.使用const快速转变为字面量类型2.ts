/**
 * @file   : 4.使用const快速转变字面量类型.ts
 * @time   : 9:27
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // +--------------------------------------------------------------------------
    // |::说明·| 2. 以下代码演示，如果给常量或变量明确制定了类型，再对其进行 typeof 的时候就不会转成 字面量类型
    // +--------------------------------------------------------------------------

    // 以下几种情况，再进行 typeof 获取类型的时候，得到的都不是字面量类型。
    // const data1: number = 1;
    // const data1: number = 1 as const;
    // let data1: number = 1 as const;
    let data1 = 1;

    type type1 = typeof data1;
    console.log(typeof data1);

    console.log(data1);
    const myBar: type1 = 1;
    // 因为不再是字面量类型 1，因此以下代码是可以通过。
    const myFoo: type1 = 4;
}
