var People = /** @class */ (function () {
    function People(name, age) {
        this.age = age;
        this.name = name;
    }
    People.prototype.display = function () {
        return "\u6211\u662F".concat(this.name, " ,\u6211\u5E74\u9F84\u4E3A").concat(this.age);
    };
    People.prototype.changeName = function (name) {
        this.name = name;
    };
    return People;
}());
