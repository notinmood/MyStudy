/**
 * @file   : index.ts
 * @time   : 10:25
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    class Horse {

    }

    // 当你需要提前声明属性的类型时
    type OnlyBoolAndHorses = { [key: string]: boolean | Horse; };
    const conforms: OnlyBoolAndHorses = {   del: true,   rodney: false, };
}

