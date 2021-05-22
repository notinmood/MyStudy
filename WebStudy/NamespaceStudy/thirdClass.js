"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hah = exports.YourNameSpace = exports.MyNameSpace = void 0;
//不期望该命名空间导出，不加export
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.ArgInOtherFile = "hah";
    function getName() {
        return "I am China!";
    }
    MyNameSpace.getName = getName;
})(MyNameSpace = exports.MyNameSpace || (exports.MyNameSpace = {}));
//期望该命名空间导出，加export
var YourNameSpace;
(function (YourNameSpace) {
    function printHello() {
        console.log("Hello world!");
    }
    YourNameSpace.printHello = printHello;
})(YourNameSpace = exports.YourNameSpace || (exports.YourNameSpace = {}));
//一定要严格遵守！！！
//希望在别的文件中使用的就用export！！！
//不希望的就不加！！！
exports.hah = "aaa";
//# sourceMappingURL=thirdClass.js.map