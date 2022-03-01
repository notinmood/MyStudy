const sh = require("basiclibrary.javascript/data/stringHelper");

let result = "";
result = sh.getStringBeforeSeparator("i am a Chinese!", "Chi");
console.log(result);

result = sh.getStringBeforeSeparator("i am a Chinese!", "chi");
console.log(result);