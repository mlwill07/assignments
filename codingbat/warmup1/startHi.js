//Given a string, return true if the string starts with "hi" and false otherwise.

function startHi(string) {
    var histring = string.slice(0,2);
    if(histring === "hi") {
        return true;
    } else {
        return false;
    }
}

console.log(startHi("hi there")); // → true
console.log(startHi("hi")); // → true
console.log(startHi("hello hi")); // → false