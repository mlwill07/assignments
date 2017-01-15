//Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

function firstTwo(string) {
    if (string.length > 2) {
        string = string.substring(0, 2);
    }
    return string;
}

console.log(firstTwo("Hello")); // → "He"
console.log(firstTwo("abcdefg")); // → "ab"
console.log(firstTwo("ab")); // → "ab"
console.log(firstTwo("abc")); // → "ab"