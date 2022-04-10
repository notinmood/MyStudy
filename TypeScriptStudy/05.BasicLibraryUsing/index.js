"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bl = require("basiclibrary.ts/lib/index");
var whole = "qingdao city";
var separator = " ";
var result = bl.StringHelper.getContentBeforeSeparator(whole, separator);
console.log(result);
