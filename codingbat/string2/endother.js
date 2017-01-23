//Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

function endOther(astring, bstring) {
    astring = astring.toLowerCase();
    bstring = bstring.toLowerCase();
    if ((astring.lastIndexOf(bstring) >= 0) || (bstring.lastIndexOf(astring) >=0)) {
        return true;
    } else {
        return false;
    }
}

console.log(endOther("Hiabc", "abc")); // → true
console.log(endOther("AbC", "HiaBc")); // → true
console.log(endOther("abc", "abXabc")); // → true
console.log(endOther("abc", "abXadc")); // → false