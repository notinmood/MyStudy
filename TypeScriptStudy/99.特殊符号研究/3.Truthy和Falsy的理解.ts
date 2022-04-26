/**
 * @file   : Truthy和Falsy的理解.ts
 * @time   : 12:01
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**

 */

// +--------------------------------------------------------------------------
// |::说明·| Truthy 是指转换后为’真‘的值;
// |::一一·| Falsy  是指转换后为‘假‘的值。
// |::一一·| 快速识别 Truthy 和 Falsy 的办法，就是用 ! 和 !!
// +--------------------------------------------------------------------------

// 以下三项都对 truthy
let fn = () => {
}
let obj = {}
let arr: never[] = []

console.log(!fn)  // false
console.log(!obj) // false
console.log(!arr) // false

console.log(!!fn)  // true
console.log(!!obj) // true
console.log(!!arr) // true



