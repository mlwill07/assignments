//Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

function theEnd (string, front) {
    if (front) {
        string = string.substr(0,1);
    } else {
        string = string.substr(string.length - 1, 1)
    }
    return string;
}

console.log(theEnd("Hello", true)); // → "H"
console.log(theEnd("Hello", false)); // → "o"
console.log(theEnd("oh", true)); // → "o"