//Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

function lastChars(a, b) {
    var suba = "";
    var subb = "";
    if ( a.length < 1) {
        suba = "@";
    } else {
        suba = a.substr(0, 1);
    }
    if (b.length < 1) {
        subb = "@";
    } else {
        subb = b.substr(b.length-1);
    }
    return suba + subb;
}

console.log(lastChars("last", "chars")); // → "ls"
console.log(lastChars("yo", "java")); // → "ya"
console.log(lastChars("hi", "")); // → "h@"