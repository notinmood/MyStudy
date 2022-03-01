// +--------------------------------------------------------------------------
// |::说明·| 因为 stringHelper.js 库不是用 modules 方式暴露的，那么使用 modules 方式访问会报错
// |::一一·| 因此 module 方式要引用类库 stringHelper.mjs。
// +--------------------------------------------------------------------------

import {helper} from "basiclibrary.javascript/data/stringHelper.mjs"

let result = helper.getStringBeforeSeparator("i am a Chinese!", "Chi");
console.log(result);