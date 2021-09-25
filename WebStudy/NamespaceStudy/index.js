"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var thirdClass_1 = require("./thirdClass");
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.myName = 'zhangsan';
    MyNameSpace.mySchool = "QDU";
})(MyNameSpace || (MyNameSpace = {}));
console.log(thirdClass_1.MyNameSpace.getName());
console.log(MyNameSpace.mySchool);
console.log(thirdClass_1.hah);
console.log(thirdClass_1.YourNameSpace.printHello());
//# sourceMappingURL=index.js.map