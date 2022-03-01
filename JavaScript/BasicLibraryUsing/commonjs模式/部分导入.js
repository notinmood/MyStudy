/**
 * @file   : 部分导入.js
 * @time   : 11:14
 * @date   : 2022/2/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const {getStringAfterSeparator} = require("basiclibrary.javascript/data/stringHelper");


let myData = "qingdao city";
let result = getStringAfterSeparator(myData, " ");
console.log(result);