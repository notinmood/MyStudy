"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Worker_1 = require("../_res/Worker");
let worker = new Worker_1.Worker("zhangsan", "HR");
console.log(worker);
worker.work();
// +--------------------------------------------------------------------------
// |::说明·| 1. 使用 as 运算符进行类型转换
// +--------------------------------------------------------------------------
let human = worker;
human.talk();
// +--------------------------------------------------------------------------
// |::说明·| 2. 使用 <> 进行类型转换
// +--------------------------------------------------------------------------
let eatable = worker;
eatable.eat();
//# sourceMappingURL=index.js.map