//Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

function middleTwo(string) {
    string = string.substr(string.length / 2-1, 2);
    return string;
}

console.log(middleTwo("string")) // → "ri"
console.log(middleTwo("code")) // → "od"
console.log(middleTwo("Practice")) // → "ct"