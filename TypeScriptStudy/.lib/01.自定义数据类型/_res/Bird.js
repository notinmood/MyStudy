"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 07:05:37
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-17 18:05:11
 * @FilePath     : Bird.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("bird fly");
    };
    Bird.prototype.display = function () {
        console.log("我是一个 Bird。");
    };
    return Bird;
}());
exports.Bird = Bird;
