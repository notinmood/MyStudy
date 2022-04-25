/**
 * @file   : A.2.使用其他独立声明文件里面的标的数据.ts
 * @time   : 8:49
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

//以下代码可以编译通过，但不能实际运行。因为 dClass 等是类型声明，不是类型定义。
// 类型声明的目的只是告诉 TypeScript 编译器，可以使用这样的类型进行智能提示。

/**
 * 1. 调用全局级别的声明文件，不要 import 引入，可以直接使用
 */
const d = new dClass();
d.say("zhangsan");

/**
 * 2. 调用文件级别的声明文件，如果没有 import 引入，则无法查找到标的信息
 * （以下代码无法变异体通过;如果要使用 eClass，需要import他的定义文件，参见）
 */
// const e = new eClass();
