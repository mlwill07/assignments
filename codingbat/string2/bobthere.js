//Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

function bobThere(string) {
    if(string.search(/b.b/gi) >= 0) {
       return true;
    } else {
        return false;
    }  
}

console.log(bobThere("abcbob")); // → true
console.log(bobThere("b9b")); // → true
console.log(bobThere("bac")); // → false
