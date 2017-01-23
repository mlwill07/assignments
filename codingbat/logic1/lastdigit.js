//Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

function lastDigit(a, b, c) {
    if (a % 10 === (b % 10 || c % 10) || b % 10 === (a % 10 || c % 10) || c % 10 === (a % 10 || b % 10)) {
        return true;
    } else {
        return false;
    }
}

console.log(lastDigit(23, 19, 13)); // → true
console.log(lastDigit(23, 19, 12)); // → false
console.log(lastDigit(23, 19, 3)); // → true
