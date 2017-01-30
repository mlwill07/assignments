//We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

function xyBalance(string) {
    if(string.lastIndexOf('y') > string.lastIndexOf('x')) {
        return true;
    } else {
        return false;
    }
}

console.log(xyBalance("aaxbby")); // → true
console.log(xyBalance("aaxbb")); // → false
console.log(xyBalance("yaaxbb")); // → false
console.log(xyBalance("yaaxbb")); // → false