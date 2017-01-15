//Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

function middleThree(string) {
    var sub = string.substr(string.length /2 -1.5, 3);
    return sub;
}

//alternatively 

//function middleThree(string) {
//    return string.substr(Math.floor(string.length /2 ) -1, 3);
//}

console.log(middleThree("Candy")); // → "and"
console.log(middleThree("and")); // → "and"
console.log(middleThree("solving")); // → "lvi"
console.log(middleThree("decimated")); // → "ima"