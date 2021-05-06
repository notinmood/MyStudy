/// <reference path = "IShape.ts" />
namespace Drawing {
    export class Rectangle implements IShape {
        draw() {
            console.log("I am Rectangle");
        }
    }
}
