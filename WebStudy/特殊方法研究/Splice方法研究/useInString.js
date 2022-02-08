/**
 * JavaScript 字符串没有原生的 splice 方法；
 * 使用 BasicLibrary.JavaScript 内的 splice 方法实现此功能。
 */

import StringHelper from "basiclibrary.javascript/utils/stringHelper.js";


const originalString = "i love China!";

// +--------------------------------------------------------------------------
// |::说明：| JavaScript 字符串没有原生的 splice 方法
// +--------------------------------------------------------------------------

// originalString.split()

// +--------------------------------------------------------------------------
// |::说明：| 使用 BasicLibrary.JavaScript 内的 splice 方法实现此功能
// +--------------------------------------------------------------------------1

let result = StringHelper.splice(originalString, " ", "-");
console.log(result);