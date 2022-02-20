// +--------------------------------------------------------------------------
// |::说明·| 因为basiclibrary.javascript库不是用modules方式暴露的，因此使用modules方式访问会报错
// +--------------------------------------------------------------------------

import {helper} from "basiclibrary.javascript/data/stringHelper.mjs"

let result = helper.getStringBeforeSeparator("i am a Chinese!", "Chi");
console.log(result);