/**
 * @file   : 4.使用extends判断裸类型和包装类型.ts
 * @time   : 17:00
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    //当Flatten是数组类型的时候，用了索引访问类型去获得string[]里元素的类型，
    //其他类型时返回类型本身。
    type Flatten<T> = T extends any[] ? T[number] : T;

    // Extracts out the element type.
    type myType1 = Flatten<string[]>;//string
    type myType2 = Flatten<boolean[]>;//boolean
    type myType3 = Flatten<number>;//number
}
