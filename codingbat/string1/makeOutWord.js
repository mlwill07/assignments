//Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

function makeOutWord(a, b) {
    var sub1 = a.substring(0, 2);
    var sub2 = a.substring(2, 4);
    var string = sub1 + b + sub2;
    return string;
}

console.log(makeOutWord("<<>>", "Yay")); // → "<<Yay>>"
console.log(makeOutWord("<<>>", "WooHoo")); // → "<<WooHoo>>"
console.log(makeOutWord("[[]]", "word")); // → "[[word]]"