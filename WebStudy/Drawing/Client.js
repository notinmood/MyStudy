"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle = require("./Circle");
const triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
//# sourceMappingURL=Client.js.map