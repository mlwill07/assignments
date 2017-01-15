//Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

function extraEnd(string) {
    subs = string.substring(string.length - 2, string.length);
    string = subs + subs + subs;
    return string;
}

console.log(extraEnd("Hello")); // → "lololo"
console.log(extraEnd("ab")); // → "ababab"
console.log(extraEnd("Hi")); // → "HiHiHi"