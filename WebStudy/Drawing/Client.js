/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Rectangle.ts" />
var Drawing;
(function (Drawing) {
    // import ISharp = Drawing.IShape;
    // import Circle = Drawing.Circle;
    // import Rectangle = Drawing.Rectangle;
    function drawSharp(sharp) {
        sharp.draw();
    }
    let circle = new Drawing.Circle();
    let rectangle = new Drawing.Rectangle();
    drawSharp(circle);
    drawSharp(rectangle);
})(Drawing || (Drawing = {}));
//# sourceMappingURL=Client.js.map