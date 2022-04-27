/**
 * @file   : 4.类型断言 vs 类型转换.ts
 * @time   : 6:43
 * @date   : 2022/4/24
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 1. 类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果JavaScript中会被删除：
// +--------------------------------------------------------------------------
function toBoolean1(something: any): boolean {
    return something as boolean;
}

toBoolean1(1);
// 返回值为 1

// +--------------------------------------------------------------------------
// |::说明·| 2. 使用类型转换语法 type(***) 才能改变结果
// +--------------------------------------------------------------------------
function toBoolean2(something: any): boolean {
    return Boolean(something);
}

toBoolean2(1);
// 返回值为 true
