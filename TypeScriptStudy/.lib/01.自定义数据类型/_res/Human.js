"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () {
        console.log("human talk");
    };
    Human.prototype.display = function () {
        console.log("I am Human.");
    };
    return Human;
}());
exports.Human = Human;
