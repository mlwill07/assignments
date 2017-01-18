//Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

function teenSum(num1, num2) {
    if((num1 >= 13 && num1 <= 19) || (num2 >= 13 && num2 <= 19)) {
        return 19;
    } else {
        return num1 + num2;
    }
}

console.log(teenSum(3, 4)); // → 7
console.log(teenSum(10, 13)); // → 19
console.log(teenSum(13, 2)); // → 19