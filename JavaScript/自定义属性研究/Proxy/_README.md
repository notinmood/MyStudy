# 说明

## Proxy的三个参数

1. target

Proxy除了可以拦截一般的object对象外（参考 `00.入门.js`），还能拦截 function，数组甚至其他Proxy。参考 `02.拦截function.js`

2. handler

这也是一个对象，是一个处理器对象。里面包含 0+个捕获器（trap），比如 set、get、app等有限的数个成员。捕获器自身是函数，但其作为 handler 对象属性存在。
> trap 本意为“陷阱”，翻译为“捕获器”也非常合适（陷阱本来就是捕获猎物的）。