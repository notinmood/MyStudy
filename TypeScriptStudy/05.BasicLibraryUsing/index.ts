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

import * as bl from 'basiclibrary.ts/lib/index';

const whole = "qingdao city";
const separator = " ";
const result = bl.StringHelper.getStringBeforeSeparator(whole, separator);
console.log(result); //qingdao

const objectA = { a: 'AA', b: 'BB', };
const objectB = { a: '@@', c: 'CC', };
const objectC = bl.ObjectHelper.combine(objectA, objectB);
console.log(objectC);

// bl.StringHelper.getContentAfterSeparator(whole,separator);
