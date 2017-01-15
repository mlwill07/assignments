//Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

function withouEnd2(string) {
    string = string.substring(1, string.length -1);
    return string;
}

console.log(withouEnd2("Hello")); // → "ell"
console.log(withouEnd2("abc")); // → "b"
console.log(withouEnd2("ab")); // → ""