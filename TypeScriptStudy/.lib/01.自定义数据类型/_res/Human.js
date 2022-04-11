"use strict";
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () {
        console.log("human talk");
    };
    Human.prototype.display = function () {
        console.log("我是一个 Human。");
    };
    return Human;
}());
