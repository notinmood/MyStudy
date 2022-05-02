/**
 * @file   : 1.通过索引的方式获取复杂类型中某个子键的数据类型.ts
 * @time   : 22:41
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 获取复杂类型的子类型，使用 [] 这种索引形式。
// +--------------------------------------------------------------------------

export namespace MyNameSpace {
    const someData = {
        obj: {
            one: 1
        },
        arr: [1, 2, 4],
        num: 1
    }

    type someType = typeof someData;
    type firstType = someType["obj"];//{one: number}
    type secondType = someType["num"];//number
    type thirdType = someType["arr"];//number[]
}
