/**
 * 因为basiclibrary.javascript库不是用modules方式暴露的，因此使用modules方式访问会报错
 * @type {*}
 */

import StringHelper from "basiclibrary.javascript/utils/stringHelper"

let result = StringHelper.getStringBeforeSeparator("i am a Chinese!", "Chi");
console.log(result);