//Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

function lastDigit(num1, num2) {
    if(num1 % 10 === num2 % 10) {
        return true;
    } else {
        return false;
    }
}

console.log(lastDigit(7, 17)); // → true
console.log(lastDigit(6, 17)); // → false
console.log(lastDigit(3, 113)); // → true
console.log(lastDigit(57, 27)); // → true