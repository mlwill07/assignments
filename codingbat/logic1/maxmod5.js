//Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

function maxMod5(a, b) {
    if (a % 5 === b % 5) {
        return Math.min(a, b);
    } else {
        return Math.max(a, b);
    }
}

console.log(maxMod5(2, 3)); // → 3
console.log(maxMod5(6, 2)); // → 6
console.log(maxMod5(3, 2)); // → 3
console.log(maxMod5(10, 15)); // → 10