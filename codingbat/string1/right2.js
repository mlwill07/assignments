//Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

function right2(string) {
    var right = string.substring(string.length-2);
    string = string.substring(0, string.length-2);
    string = right + string;
    return string;
}

console.log(right2("Hello")); // → "loHel"
console.log(right2("java")); // → "vaja"
console.log(right2("Hi")); // → "Hi"