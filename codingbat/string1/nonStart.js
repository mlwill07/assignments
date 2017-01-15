//Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

function nonStart(strA, strB) {
    strA = strA.substring(1);
    strB = strB.substring(1);
    return strA + strB;
}

console.log(nonStart("Hello", "There")); // → "ellohere"
console.log(nonStart("java", "code")); // → "avaode"
console.log(nonStart("shotl", "java")); // → "hotlava"