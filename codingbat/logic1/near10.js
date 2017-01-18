//Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2. See also: Introduction to Mod

function nearTen(n) {
    if (n % 10 >= 8 || n % 10 <= 2) {
        return true;
    } else {
        return false;
    }
}

console.log(nearTen(12)); // → true
console.log(nearTen(17)); // → false
console.log(nearTen(19)); // → true
console.log(nearTen(29)); // → true
console.log(nearTen(22)); // → true