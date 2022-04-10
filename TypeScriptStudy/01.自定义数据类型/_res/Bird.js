var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("bird fly");
    };
    Bird.prototype.display = function () {
        console.log("我是一个 Bird。");
    };
    return Bird;
}());
