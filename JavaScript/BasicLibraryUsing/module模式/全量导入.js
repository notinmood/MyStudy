/**
 * @file   : 部分导入.js
 * @time   : 11:16
 * @date   : 2022/2/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import * as sh from "basiclibrary.javascript/data/stringHelper.mjs";


let myData = "qingdao city";
let result = sh.helper.getStringAfterSeparator(myData, " ");
console.log(result);
