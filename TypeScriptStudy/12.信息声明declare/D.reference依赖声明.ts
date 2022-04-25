/**
 * @file   : D.reference依赖声明.ts
 * @time   : 9:11
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/// <reference path="../00.res/GloClass.ts" />


// 说明
//1. reference 语句只能出现在文件头部，其前面不能再有其他正式语句（但可以有注释语句）；否则就是一个普通的注释语句，无法起到声明依赖作用。
//2. reference 语句什么依赖，不是导入文件。声明依赖的作用仅在 TypeScript编译器中进行代码提示。
//3. 现代 IDE(VSC、WebStorm等)，不需要 reference 语句，依然可以识别出现目标类型，自动进行代码智能提示。


// 与 namespace 类似，三斜线指令也是 ts 在早期版本中为了描述模块之间的依赖关系而创造的语法。
// 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的三斜线指令来声明模块之间的依赖关系了，这个需要特别注意。
