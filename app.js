"use strict";
function guessTheType(strOrNumOrBool) {
    if (typeof strOrNumOrBool === "string") {
        return console.log(`The input is ${typeof strOrNumOrBool} type!`);
    }
    else if (typeof strOrNumOrBool === "number") {
        return console.log(`The input is ${typeof strOrNumOrBool} type!`);
    }
    else if (typeof strOrNumOrBool === "boolean") {
        return console.log(`The input is ${typeof strOrNumOrBool} type!`);
    }
    else if (Array.isArray(strOrNumOrBool)) {
        return console.log(`The input is an Array of ${typeof strOrNumOrBool} type!`);
    }
    return console.log("Invalid Input!");
}
guessTheType(23);
