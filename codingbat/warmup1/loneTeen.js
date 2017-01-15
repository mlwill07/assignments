//We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

function loneTeen(num1, num2) {
    if ((num1 >=13 && num1 <= 19) && (num2 >=13 && num2 <= 19)) {
        return false;
    } else if ((num1 >=13 && num1 <= 19) || (num2 >=13 && num2 <= 19)) {
     return true;   
    } else {
        return false;
    }
}

console.log(loneTeen(13, 99)); // → true
console.log(loneTeen(21, 19)); // → true
console.log(loneTeen(13, 13)); // → false
console.log(loneTeen(12, 12)); // → false --- my own test what to do with neither?