/**
 * @file   : 2.1.Exclude的使用.ts
 * @time   : 11:11
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>  // 'b' | 'd'
}
