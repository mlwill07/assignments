//Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

function prefixAgain(a, n) {
    var output = '';
    var check = a.substr(0, n);
    return a.substring(n).includes(check);
}

console.log(prefixAgain("abXYabc", 1)); // → true
console.log(prefixAgain("abXYabc", 2)); // → true
console.log(prefixAgain("abXYabc", 3)); // → false