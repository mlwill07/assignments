//Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

function repeatFront(a, n) {
    var output = '';
    for (var i = 0; i < n; i++) {
        output += a.substr(0, n-i); 
    }
    return output;
}

console.log(repeatFront("Chocolate", 4)); // → "ChocChoChC"
console.log(repeatFront("Chocolate", 3)); // → "ChoChC"
console.log(repeatFront("Ice Cream", 2)); // → "IcI"