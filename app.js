"use strict";
// Function that handles each shape
function getArea(shape) {
    switch (shape.kind) {
        case "square":
            return shape.sideLength * shape.sideLength;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            // This ensures all cases are covered and throws an error for any future changes
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
const mySquare = { kind: "square", sideLength: 5 };
console.log(getArea(mySquare)); // Output: 25
const myCircle = { kind: "circle", radius: 3 };
console.log(getArea(myCircle)); // Output: 28.27...
