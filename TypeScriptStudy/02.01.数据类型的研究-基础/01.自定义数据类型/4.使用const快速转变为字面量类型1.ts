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
    // |::说明·| 1. 以下代码演示，如果定义一个常量或者一个变量，不为其指定类型的时候（就是不用 xx：YY形式）
    // 接着对其进行 typeof 获取类型，其将变为 字面量 类型，即 这个类型为只支持某个具体是数值的类型
    // （本例中这个字面量类型就是 1，就是说 1 不仅仅是一个数值了，而且其还是一个类型。
    // 当然这个类型可以定义的值也只有一个，就是 1）
    // +--------------------------------------------------------------------------

    // 以下3种情况，再进行 typeof 获取类型的时候，得到的都是字面量类型。
    // let data1 = 1 as const;
    const data1 = 1;
    // const data1 = 1 as const;

    type type1 = typeof data1;
    console.log(typeof data1);

    console.log(data1);
    const myBar: type1 = 1;
    // 因为是字面量类型 1，因此以下代码是无法通过的。
    // const myFoo: type1 = 4;
}
