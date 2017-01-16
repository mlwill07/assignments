//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

function frontAgain(a) {
    if(a.substr(0, 2) === a.substr(a.length-2, 2)) {
        return true;
    } else {
        return false;
    }
}

console.log(frontAgain("edited")); // → true
console.log(frontAgain("edit")); // → false
console.log(frontAgain("ed")); // → true