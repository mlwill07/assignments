//Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

function nTwice(string, n) {
    var sub1 = string.substring(0, n);
    var sub2 = string.substring(string.length - n);
    string = sub1 + sub2;
    return string;
}

console.log(nTwice("Hello", 2)); // → "Helo"
console.log(nTwice("Chocolate", 3)); // → "Choate"
console.log(nTwice("Chocolate", 1)); // → "Ce"