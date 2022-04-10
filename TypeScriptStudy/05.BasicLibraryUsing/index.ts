import * as bl from 'basiclibrary.ts/lib/index';

const whole = "qingdao city";
const separator = " ";
const result = bl.StringHelper.getContentBeforeSeparator(whole, separator);
console.log(result);
