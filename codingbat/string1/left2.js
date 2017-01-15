//Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

function left2(string) {
    var left = string.substring(0,2);
    string = string.substring(2);
    string = string + left;
    return string;
}

console.log(left2("Hello")); // → "lloHe"
console.log(left2("java")); // → "vaja"
console.log(left2("Hi")); // → "Hi"