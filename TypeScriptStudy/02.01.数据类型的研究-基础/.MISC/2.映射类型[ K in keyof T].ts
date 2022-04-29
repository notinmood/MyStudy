/**
 * @file   : 2.映射类型[ K in keyof T].ts
 * @time   : 22:54
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 固定的语法 [K in keyof T] ，K表示全部 T 中的键被拆分成的一个个键。
// +--------------------------------------------------------------------------

export namespace MyNameSpace {
    const someData = {
        obj: {
            one: 1
        },
        num: 2
    }
    type getType<T> = {
        [K in keyof T]: T[K]
    }
    type instance1 = getType<typeof someData>;//{obj: {one: number}, num: number}
}
