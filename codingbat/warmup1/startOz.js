//Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

function startOz(string) {
    var newString = '';
    if(string.charAt(0) === 'o'){
        newString += string.charAt(0);
    }
    if (string.charAt(1) === 'z' ) {
        newString += string.charAt(1);
    }
    return newString;
}

console.log(startOz("ozymandias")); // → "oz"
console.log(startOz("bzoo")); // → "z"
console.log(startOz("oxx")); // → "o"
console.log(startOz("axx")); // → ""