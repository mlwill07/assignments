//Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

function plusOut(str1, str2) {
    var re = new RegExp(str2, "g")
    return str1.replace(re, "+");
}

console.log(plusOut("12xy34", "xy")); // → "++xy++"
console.log(plusOut("12xy34", "1")); // → "1+++++"
console.log(plusOut("12xy34xyabcxy", "xy")); // → "++xy++xy+++xy"