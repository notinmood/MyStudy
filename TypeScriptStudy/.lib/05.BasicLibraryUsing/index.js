"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 20:09:50
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-11 20:46:46
 * @FilePath     : index.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var bl = require("basiclibrary.ts/lib/index");
var whole = "qingdao city";
var separator = " ";
var result = bl.StringHelper.getContentBeforeSeparator(whole, separator);
console.log(result);
var objectA = { a: 'AA', b: 'BB', };
var objectB = { a: '@@', c: 'CC', };
var objectC = bl.ObjectHelper.combine(objectA, objectB);
console.log(objectC);
// bl.StringHelper.getContentAfterSeparator(whole,separator);
