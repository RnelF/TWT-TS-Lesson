"use strict";
function getItemLength(nameOrNames) {
    if (typeof nameOrNames === "string") {
        return console.log(nameOrNames.length);
    }
    else if (Array.isArray(nameOrNames)) {
        return console.log(nameOrNames.length);
    }
    return 0; //if the input is invalid return 0
}
getItemLength("Arnel");
