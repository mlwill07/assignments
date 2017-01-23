//Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

function shareDigit(a, b) {
    n1 = Math.floor(a/10);
    n2 = Math.floor(a % 10);
    n3 = Math.floor(b/10);
    n4 = Math.floor(b % 10);
    if( n1 === n3 || n1 === n4 || n2 === n3 || n2 === n4) {
        return true;
    } else {
        return false;
    }
}


console.log(shareDigit(12, 23)); // → true
console.log(shareDigit(12, 43)); // → false
console.log(shareDigit(12, 44)); // → false