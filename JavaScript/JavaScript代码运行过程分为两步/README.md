# 说明

JavaScript 代码的运行过程分为两步：

1. 先解析（这个时候初始化全局对象GlobalObject，创建执行上下文）
2. 再执行（真正地执行代码）（执行阶段又分为同步代码执行和异步代码执行）
    1. 同步任务：普通的任务，依次从上往下执行。
    2. 异步任务：又分为宏任务、微任务。
       1. 宏任务：setTimeout跟setInterval
       2. 微任务：Promise().then() 这里要注意一下，Promise方法里面的是同步任务，then里面的才是微任务
> 执行顺序：先执行同步任务，遇到异步任务，将其放入到宏任务或者微任务队列中，然后优先执行微任务，接下来再去执行宏任务。

▌参考 [掌握全局代码执行和作用域的提升 - 不愿染是与非 - 博客园 (cnblogs.com)](https://www.cnblogs.com/codermjy/p/16248271.html)

▌参考 [https://www.cnblogs.com/ywjbokeyuan/p/16011512.html](https://www.cnblogs.com/ywjbokeyuan/p/16011512.html)
