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
var blts = require("basiclibrary.ts/lib/index");
var Bird_1 = require("./_res/Bird");
var Human_1 = require("./_res/Human");
var some;
some = {
    fly: function () {
        console.log("I can fly!");
    },
    talk: function () {
        console.log("I can talk!");
    },
};
some.fly();
some.talk();
console.log('。。。这是分隔符。。。');
var myName;
var human = new Human_1.Human();
var bird = new Bird_1.Bird();
var result = blts.ObjectHelper.combine(human, bird);
myName = result;
myName.display();
myName.fly();
