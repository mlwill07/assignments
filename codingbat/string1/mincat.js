//Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

function minCat(a, b) {
    if (a.length === b.length) {
        return a + b;
    } else if (a.length > b.length) {
        var x = a.length - b.length;
        a = a.substring(x) + b;
        return a;
    } else {
        x = b.length - a.length;
        a = a + b.substring(x);
        return a;
    }
}

console.log(minCat("Hello", "Hi")) // → "loHi"
console.log(minCat("Hello", "java")) // → "ellojava"
console.log(minCat("java", "Hello")) // → "javaello"