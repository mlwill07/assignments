//Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

function repeatSeparator(a, b, n) {
    var output = '';
    for (var i = 0; i < n-1; i++) {
        output += a + b;
    }
    output += a;
    return output;
}

console.log(repeatSeparator("Word", "X", 3)); // → "WordXWordXWord"
console.log(repeatSeparator("This", "And", 2)); // → "ThisAndThis"
console.log(repeatSeparator("This", "And", 1)); // → "This"