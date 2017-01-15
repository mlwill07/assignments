//Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

function endUp(string) {
    var count = string.length - 3;
    if (count < 0) {
        string = string.toUpperCase();
    } else{
        var upcase = string.substr(count, 3);
        upcase = upcase.toUpperCase();
        string = string + upcase;
    }
   return string;
}

console.log(endUp("Hello")); // → "HeLLO"
console.log(endUp("hi there")); // → "hi thERE"
console.log(endUp("hi")); // → "HI"