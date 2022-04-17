"use strict";
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = "xie ran";
        this.name = name;
    }
    Student.prototype.getName = function () {
        return ("helle,Mr." + this.name);
    };
    ;
    return Student;
}());
