/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    class Rectangle {
        draw() {
            console.log("I am Rectangle");
        }
    }
    Drawing.Rectangle = Rectangle;
})(Drawing || (Drawing = {}));
//# sourceMappingURL=Rectangle.js.map