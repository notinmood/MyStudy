/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    class Circle {
        draw() {
            console.log("I am Circle");
        }
    }
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
//# sourceMappingURL=Circle.js.map