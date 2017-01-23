//Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

function xyzThere(string) {
    if((string.search('xyz') >= 0) && (string.charAt(string.search('xyz')-1) != '.')) {
        return true;
    } else {
        return false;
    }
}

console.log(xyzThere("abcxyz")); // → true
console.log(xyzThere("abc.xyz")); // → false
console.log(xyzThere("xyz.abc")); // → true