//Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

function withoutX2(a) {
    var xstring = a.substr(0,2);
    a = a.substr(2);
    if (xstring.charAt(1) === 'x') {
        xstring = xstring.substr(0,1);
    }
    if (xstring.charAt(0) === 'x') {
        xstring = xstring.substr(1);
    }
    return xstring + a;
}

console.log(withoutX2("xHi")); // → "Hi"
console.log(withoutX2("Hxi")); // → "Hi"
console.log(withoutX2("Hi")); // → "Hi"