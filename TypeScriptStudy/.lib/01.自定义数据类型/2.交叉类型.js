"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 06:59:30
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-17 18:14:12
 * @FilePath     : 2.交叉类型.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// +--------------------------------------------------------------------------
// |::说明·| 使用 & 定义数据类型
// +--------------------------------------------------------------------------
const blts = require("basiclibrary.ts/lib/index");
const Bird_1 = require("./_res/Bird");
const Human_1 = require("./_res/Human");
let some;
some = {
    fly() {
        console.log("I can fly!");
    },
    talk() {
        console.log("I can talk!");
    },
};
some.fly();
some.talk();
let myName;
let human = new Human_1.Human();
let bird = new Bird_1.Bird();
let result = blts.ObjectHelper.combine(human, bird);
myName = result;
myName.display();
myName.fly();
//# sourceMappingURL=2.%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B.js.map