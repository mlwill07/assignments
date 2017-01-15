//Given two temperatures, return true if one is less than 0 and the other is greater than 100.

function icyHot(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) {
        return true;
    } else { 
    return false;
    }
}

console.log(icyHot(120, -1)); // → true
console.log(icyHot(-1, 120)); // → true
console.log(icyHot(2, 120)); // → false