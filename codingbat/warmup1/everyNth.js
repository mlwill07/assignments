//Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

function everyNth(string, num1) {
    var newstring = '';
    for (var i =0; i < string.length; i += num1 ){
        newstring += string[i];
    }
    return newstring;
}

console.log(everyNth("Miracle", 2)); // → "Mrce"
console.log(everyNth("abcdefg", 2)); // → "aceg"
console.log(everyNth("abcdefg", 3)); // → "adg"