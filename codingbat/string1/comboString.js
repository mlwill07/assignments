//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

function comboString(a, b) {
    if (a.length < b.length) {
        a = a + b + a;
    } else {
        a = b + a + b;
    }
    return a;
}

console.log(comboString("Hello", "hi")); // → "hiHellohi"
console.log(comboString("hi", "Hello")); // → "hiHellohi"
console.log(comboString("aaa", "b")); // → "baaab"