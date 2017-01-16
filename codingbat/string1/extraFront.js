//Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

function extraFront(a) {
    if(a.length < 2) {
        return a + a + a;
    } else {
        a = a.substr(0, 2);
        return a + a + a;
    }
}

console.log(extraFront("Hello")); // → "HeHeHe"
console.log(extraFront("ab")); // → "ababab"
console.log(extraFront("H")); // → "HHH"