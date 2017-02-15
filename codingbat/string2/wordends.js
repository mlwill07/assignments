//Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

function wordEnds(str1, str2) {
    var output = '';
    for(var i = 0; i < str1.length; i++) {
        if(str1.substr(i, str2.length).toLowerCase() === str2.toLowerCase()) {
            output += str1.charAt(i-1) + str1.charAt(i+str2.length);
        }
    }
    return output
}

console.log(wordEnds("abcXY123XYijk", "XY")) // → "c13i"
console.log(wordEnds("XY123XY", "XY")) // → "13"
console.log(wordEnds("XY1XY", "XY")) // → "11"