//Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

function mixString(a, b) {
    var output = '';
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        if(a[i] === undefined){
            output += b[i];
        } else if (b[i] === undefined) {
            output += a[i];
        } else {
            output += a[i] + b[i];
        }
    }
    return output;
}

console.log(mixString("abc", "xyz")); // → "axbycz"
console.log(mixString("Hi", "There")); // → "HTihere"
console.log(mixString("xxxx", "There")); // → "xTxhxexre"