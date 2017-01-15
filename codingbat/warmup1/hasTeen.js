//We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

function hasTeen(num1, num2, num3) {
    if ((num1 >= 13 && num1 <= 19) || (num2 >= 13 && num2 <= 19) || (num3 >= 13 && num3 <= 19)) {
        return true;
    } else {
        return false;
    }
}



console.log(hasTeen(13, 20, 10)); // → true
console.log(hasTeen(20, 19, 10)); // → true
console.log(hasTeen(20, 10, 13)); // → true
console.log(hasTeen(20, 10, 10)); // → true