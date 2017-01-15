//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

function makeAbba(string1, string2) {
    var string = string1 + string2 + string2 + string1;
    return string;
}

console.log(makeAbba("Hi", "Bye")); // → "HiByeByeHi"
console.log(makeAbba("Yo", "Alice")); // → "YoAliceAliceYo"
console.log(makeAbba("What", "Up")); // → "WhatUpUpWhat"