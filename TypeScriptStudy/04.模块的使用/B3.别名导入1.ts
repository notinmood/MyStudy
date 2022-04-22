/**
 * @file   : B3.别名导入.ts
 * @time   : 9:41
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import {someVar as localVar } from "./A1.直接导出";

console.log(localVar);
// 重命名之后，原来的名称就不可以使用了
// console.log(someVar);
