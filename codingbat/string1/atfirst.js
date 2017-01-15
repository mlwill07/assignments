//Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

function atFirst(string) {
    if (string.length < 2) {
        return string + "@";
    } else {
        return string.substr(0,2);
    }
}

console.log(atFirst("hello")); // → "he"
console.log(atFirst("hi")); // → "hi"
console.log(atFirst("h")); // → "h@"