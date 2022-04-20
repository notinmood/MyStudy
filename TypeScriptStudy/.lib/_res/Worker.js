"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
var Human_1 = require("./Human");
// +--------------------------------------------------------------------------
// |::说明·| 通过模块构造类型的例子
// +--------------------------------------------------------------------------
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, workType) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.workType = workType;
        return _this;
    }
    Worker.prototype.work = function () {
        console.log("\u6211\u662F\u4E00\u4E2A".concat(this.workType, ",\u6211\u6B63\u5728\u5DE5\u4F5C\uFF01"));
    };
    return Worker;
}(Human_1.Human));
exports.Worker = Worker;
