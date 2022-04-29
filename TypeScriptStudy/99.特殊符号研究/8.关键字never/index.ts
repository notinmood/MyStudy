/**
 * @file   : index.ts
 * @time   : 16:12
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| never 是一个永远不会发生的类型
// +--------------------------------------------------------------------------


// ok，作为函数返回类型的 never。
let bar: never = (() => {
    throw new Error('Throw my hands in the air like I just dont care');
})();

// ok，执行空的语句也没有返回值。
let boo: never = (() => {
})();


// 以下代码就会报错
// let foo: never = 123; // Error: number 类型不能赋值给 never 类型
