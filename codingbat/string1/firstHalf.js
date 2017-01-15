//Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

function firstHalf(string) {
    var half = string.length / 2;
    string = string.substring(0, half);
    return string;
}

console.log(firstHalf("WooHoo")); // → "Woo"
console.log(firstHalf("HelloThere")); // → "Hello"
console.log(firstHalf("abcdef")); // → "abc"