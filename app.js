"use strict";
var Size;
(function (Size) {
    Size[Size["Smallest"] = 1] = "Smallest";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var size = Size.Smallest;
if (size === Size.Smallest) {
}
//String Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var value;
