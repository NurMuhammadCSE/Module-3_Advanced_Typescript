"use strict";
let checkbox;
checkbox = "Next Level Web Application";
checkbox.length;
checkbox.length;
function kgToGram(param) {
    if (typeof param === "number") {
        return param * 1000;
    }
    if (typeof param === "string") {
        const result = parseInt(param, 10);
        return result;
    }
    return undefined;
}
kgToGram(1000);
kgToGram("1000");
kgToGram(1000.5);
kgToGram("1000.5");
