//Given a string, return true if it ends in "ly".

function endsLy(string) {
    string = string.substring(string.length -2);
    if (string === 'ly') {
        return true;
    } else {
        return false;
    }
}

console.log(endsLy("oddly")); // → true
console.log(endsLy("y")); // → false
console.log(endsLy("oddy")); // → false