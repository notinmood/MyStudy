/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Rectangle.ts" />
namespace Drawing{
    // import ISharp = Drawing.IShape;
    // import Circle = Drawing.Circle;
    // import Rectangle = Drawing.Rectangle;

    function drawSharp(sharp:Drawing.IShape){
        sharp.draw();
    }

    let circle= new Circle();
    let rectangle= new Rectangle();
    drawSharp(circle);
    drawSharp(rectangle);
}
