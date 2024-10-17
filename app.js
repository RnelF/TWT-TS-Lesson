"use strict";
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, value) {
    const results = [];
    for (let i = 0; (i = funcs.length); i++) {
        const args = value[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
applyFunc([mul, div], [
    [1, 2],
    [4, 5],
]);
