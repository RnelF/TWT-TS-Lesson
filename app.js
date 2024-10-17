"use strict";
function add(x, y) {
    return x + y;
}
const result = add(1, 2);
console.log(result);
function makeName(firstName, lastName, middleName) {
    if (middleName)
        return firstName + " " + middleName + " " + lastName;
    return firstName + " " + lastName;
}
const fullName = makeName("Arnel", "Francia", "Yubal");
console.log(fullName);
///////////////////////////////
function callFunc(func, param1, param2) {
    func(param1, param2);
}
callFunc(makeName, "Arnel", "Francia");
