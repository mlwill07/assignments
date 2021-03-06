//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

function withoutEnd(string) {
    string = string.substring(1, string.length-1);
    return string;
}

console.log(withoutEnd("Hello")); // → "ell"
console.log(withoutEnd("java")); // → "av"
console.log(withoutEnd("coding")); // → "odin"