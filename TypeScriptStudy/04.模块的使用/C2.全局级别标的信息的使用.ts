/**
 * @file   : C2.全局级别标的信息的使用.ts
 * @time   : 9:30
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 因为定义 GloClass 的文件，不是一个模块，其也无法通过 import 导入。
 * 因此全局级别的 GloClass 根本无法使用
 */

// import {GloClass} from "../00.res/GloClass";

const gcc = new GloClass();
gcc.sayHi("zhangsan");
