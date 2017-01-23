//Return the number of times that the string "hi" appears anywhere in the given string.

function countHi(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'h' && str.charAt(i+1) === 'i') {
            count++
        }
    }
    return count;
}

console.log(countHi("abc hi ho")); // → 1
console.log(countHi("ABChi hi")); // → 2
console.log(countHi("hihi")); // → 2