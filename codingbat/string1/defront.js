//Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

function deFront(a) {
    var keep = '';
    if (a.charAt(0) === 'a') {
        keep += a.charAt(0);
    }
    if (a.charAt(1) === 'b') {
        keep += a.charAt(1);
    }
    a = a.substr(2);
    return keep + a;
}

console.log(deFront("Hello")); // → "llo"
console.log(deFront("java")); // → "va"
console.log(deFront("away")); // → "aay"
console.log(deFront("nband")); // → "band"