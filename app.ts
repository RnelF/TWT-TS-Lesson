interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

// Union type
type Shape = Square | Rectangle | Circle;

// Function that handles each shape
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.sideLength * shape.sideLength;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    default:
      // This ensures all cases are covered and throws an error for any future changes
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const mySquare: Square = { kind: "square", sideLength: 5 };
console.log(getArea(mySquare)); // Output: 25

const myCircle: Circle = { kind: "circle", radius: 3 };
console.log(getArea(myCircle)); // Output: 28.27...
