//Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

function in1To10(n, isOutside) {
    if(!isOutside) {
        if(n >= 1 && n <= 10) {
            return true;
        } else {
            return false;
        }
    } else {
        if (n <= 1 || n >= 10) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(in1To10(5, false)); // → true
console.log(in1To10(11, false)); // → false
console.log(in1To10(11, true)); // → true
console.log(in1To10(5, true)); // → false