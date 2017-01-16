//Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

function without2(a) {
    if(a.substr(0,2) === a.substr(a.length-2, 2)) {
        return a.substr(2);
    } else {
        return a
    }
}

console.log(without2("HelloHe")); // → "lloHe"
console.log(without2("HelloHi")); // → "HelloHi"
console.log(without2("Hi")); // → ""