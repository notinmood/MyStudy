"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () {
        console.log("\u6211\u4F1A\u8BF4\u8BDD\uFF01");
    };
    Human.prototype.eat = function () {
        console.log("\u6211\u80FD\u5403\u4E1C\u897F\uFF01");
    };
    Human.prototype.introduceSelf = function () {
        console.log("\u6211\u662F".concat(this.name, ",\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01"));
    };
    ;
    return Human;
}());
exports.Human = Human;
