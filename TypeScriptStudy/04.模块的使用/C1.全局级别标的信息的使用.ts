/**
 * @file   : a.ts
 * @time   : 9:22
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 以下代码可以编译通过，但无法运行。因为运行的时候JavaScript找不到类型 GloClass 的定义。

const gc = new GloClass();
gc.sayHi("zhangsan");
