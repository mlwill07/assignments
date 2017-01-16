//Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

function lastTwo(a) {
    var swap1 = a.substr(a.length - 2, 1);
    var swap2 = a.substr(a.length -1, 1);
    a = a.substring(0, a.length-2) + swap2 + swap1;
    return a;
}

console.log(lastTwo("coding")); // → "codign"
console.log(lastTwo("cat")); // → "cta"
console.log(lastTwo("ab")); // → "ba"