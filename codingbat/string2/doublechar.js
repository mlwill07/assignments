//Given a string, return a string where for every char in the original, there are two chars.

function doubleChar(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        output += str[i] + str[i];
    }
    return output;
}

console.log(doubleChar("The")); // → "TThhee"
console.log(doubleChar("AAbb")); // → "AAAAbbbb"
console.log(doubleChar("Hi-There")); // → "HHii--TThheerree"