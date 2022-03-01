/**
 * @file   : using_GetType.js
 * @time   : 21:04
 * @date   : 2022/1/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明：| 这是一个调用toString方法的例子：
// |·······|  -在一个对象上直接调用toString方法，那么是调用这个对象上被重写过的toString方法
// |·······|  -如果通过call调用Object对象上的toString方法，是调用JS系统最原始的toString方法
// |·······|  -(JavaScript系统最原始的toString方法,返回的其格式为字符串[object Xxx],其中 Xxx 就是对象的真实类型。)
// +--------------------------------------------------------------------------

let target = 1;
let result = target.toString();
console.log(result);

result = Object.prototype.toString.call(target);
console.log(result);
console.log(typeof (result));