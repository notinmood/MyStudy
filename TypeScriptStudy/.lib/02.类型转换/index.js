"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker_1 = require("../_res/Worker");
var worker = new Worker_1.Worker("zhangsan", "HR");
console.log(worker);
worker.work();
// +--------------------------------------------------------------------------
// |::说明·| 1. 使用 as 运算符进行类型转换
// +--------------------------------------------------------------------------
var human = worker;
human.talk();
// +--------------------------------------------------------------------------
// |::说明·| 2. 使用 <> 进行类型转换
// +--------------------------------------------------------------------------
var eatable = worker;
eatable.eat();
