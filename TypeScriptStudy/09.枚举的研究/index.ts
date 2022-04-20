/**
 * @file   : index.ts
 * @time   : 6:55
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 特别注意：枚举后面的{}内不是对象的结构形式。
// +--------------------------------------------------------------------------
enum MyColor {
    Red,
    Green,
    Yellow,
}

console.log(MyColor.Yellow); // 2
console.log(MyColor[2]);// Yellow
