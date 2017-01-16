//Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

function withoutX(a) {
    if(a.charAt(0) === 'x') {
        a = a.substring(1);
    }
    if (a.charAt(a.length-1) === 'x') {
        a = a.substring(0, a.length-1);
    }
    return a;
}

console.log(withoutX("xHix")); // → "Hi"
console.log(withoutX("xHi")); // → "Hi"
console.log(withoutX("Hxix")); // → "Hxi"
console.log(withoutX("Hi")); // → "Hi"