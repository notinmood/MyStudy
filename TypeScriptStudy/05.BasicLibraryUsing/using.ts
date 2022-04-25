/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-11 20:37:00
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-11 20:38:35
 * @FilePath     : using.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */


import * as bl from "basiclibrary.ts/lib/index";

const myValue= bl.ObjectHelper.combine({a: true}, {b: 123});
console.log(myValue);
