//The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

function love6(a, b) {
    if ((Math.abs(a + b) === 6) || (Math.abs(a - b) === 6)){
        return true;
    } else if (a === 6 || b === 6) {
        return true;
    } else {
        return false;
    }
}

console.log(love6(6, 4)); // → true
console.log(love6(4, 5)); // → false
console.log(love6(1, 5)); // → true
console.log(love6(7, 1)); // → true
console.log(love6(1, 7)); // → true