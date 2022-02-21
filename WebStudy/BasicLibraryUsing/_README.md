导入第三方类库的说明
--
第三方模块导入的时候，有两种方式：全量导入和部分导入

1. 全量导入 就是将标的模块的内容全部导入进来
   ```javascript
   //1. commonjs 模式下(直接将require进来的数据，交给一个变量或者常量（此处的常量 sh ）)
   const sh = require("basiclibrary.javascript/data/stringHelper");
   ```
   其中 sh 就是模块 stringHelper.js 暴露的对象（module.exports = {...}）,如果要使用暴露的具体功能，就要在 sh.***
   ```javascript
   //2. module 模式下（用 * 表示所有内容，然后再 as 一个别名）
   import * as sh from "basiclibrary.javascript/data/stringHelper.mjs";
   ```
   其中 sh 就是模块 stringHelper.mjs 暴露的对象（export {...}），如果要使用具体的功能，就需要 sh.***
2. 部分导入 就是仅导入标的模块的部分内容（将要导入的内容都放在表示对象的 {} 内）
   ```javascript
   // 1. commonjs 模式下
   const {getStringAfterSeparator} = require("basiclibrary.javascript/data/stringHelper");
   ```  
   ```javascript
   // 2. module 模式下
   import {helper} from "basiclibrary.javascript/data/stringHelper.mjs"
   ``` 
   无论是 commonjs 还是 module 模式部分导入的功能，都可以将功能名称直接使用
