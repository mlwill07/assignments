//Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

function starOut(str) {
   return str.replace(/.\*./gi, "");
}

console.log(starOut("ab*cd")); // → "ad"
console.log(starOut("ab**cd")); // → "ad"
console.log(starOut("sm*eilly")); // → "silly"