# 说明

现在命名空间使用比较少了;工程实践上用模块化的方式完全可以避免全局污染的问题。

模块化参见 定义文件：`_res\Worker.ts` 和使用文件 `04.模块的使用\index.ts`

## 命名空间的更多说明

用命名空间方式定义的类型，比如 `E:\myworkspace\MyStudy\TypeScriptStudy\00.res\Employee.ts`，编译成 JavaScript的时候，会变成 IIFE 格式的函数，以此来避免名称的全局污染。
文件 `` 就是一个标准的 IIFE 函数的原型。

> IIFE : Immediately-Invoked Function Expression(立即调用的函数表达式，立即执行函数)
