//A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

function getSandwich(str) {
    var first = str.indexOf('bread');
    var last = str.lastIndexOf('bread');
    if(first != last) {
        return str.substring(first + 5, last);
    } else {
        return "";
    }
}

console.log(getSandwich("breadjambread")); // → "jam"
console.log(getSandwich("xxbreadjambreadyy")); // → "jam"
console.log(getSandwich("xxbreadyy")); // → ""