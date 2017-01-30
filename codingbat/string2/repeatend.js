//Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

function repeatEnd(a, n) {
    var output = '';
    for (var i = 0; i < n; i++ ) {
        output += a.substr(a.length-n);
    }
    return output;
}

console.log(repeatEnd("Hello", 3)); // → "llollollo"
console.log(repeatEnd("Hello", 2)); // → "lolo"
console.log(repeatEnd("Hello", 1)); // → "o"