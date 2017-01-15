//Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

function twoChar(string, n) {
    var sub = string.substr(n, 2);
    if (sub.length != 2) {
        return string.substr(0, 2);
    } else {
        return sub;
    }
}

console.log(twoChar("java", 0)); // → "ja"
console.log(twoChar("java", 2)); // → "va"
console.log(twoChar("java", 3)); // → "ja"
console.log(twoChar("java", 1)); // → "av"