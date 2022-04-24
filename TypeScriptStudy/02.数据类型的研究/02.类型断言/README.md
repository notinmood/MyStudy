# 说明

1. TypeScript内的类型断言 TypeAssertions，有两种方法：
    1. `<targetType>xx`
    2. `xx as targetType`

2. 类型断言不是类型转换
    1. 类型断言发生在 开发人员和TypeScript编译器之间（就是开发人员告诉IDE，这个对象是某某类型）；类型断言不会真实地转换数据类型。参考文件 `4.类型断言 vs 类型转换.ts`
    2. 类型转换发生在 计算机内存里面。即在内存里面，将一个对象的类型从 A 改换到 B。
