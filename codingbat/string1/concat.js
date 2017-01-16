//Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

function conCat(a, b) {
    if ( a.charAt(a.length-1) === b.charAt(0)) {
        a = a + b.substr(1, b.length-1);
    } else {
        a = a + b;
    }
    return a;
}

console.log(conCat("abc", "cat")); // → "abcat"
console.log(conCat("dog", "cat")); // → "dogcat"
console.log(conCat("abc", "")); // → "abc"
console.log(conCat("abcdc", "cat")); // → "abcdcat"