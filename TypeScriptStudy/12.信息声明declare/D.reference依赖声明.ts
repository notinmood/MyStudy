/// <reference path="../00.res/GloClass.ts" />



//1. reference 语句只能出现在文件头部，其前面不能再有其他语句；否则就是一个普通的注释语句，无法起到声明依赖作用。
//2. reference 语句什么依赖，不是导入文件。声明依赖的作用仅在 TypeScript编译器中进行代码提示。
//3. 现代 IDE(VSC、WebStorm等)，不需要 reference 语句，依然可以识别出现目标类型，自动进行代码智能提示。
