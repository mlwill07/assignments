//Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

function max1020(num1, num2) {
    if((num1 >= 10 && num1 <= 20) && (num2 >= 10 && num2 <=20)) {
        var max = Math.max(num1, num2);
        return max;
    } else if ((num1 >= 10 && num1 <= 20)) {
        return num1;
    } else if ((num2 >= 10 && num2 <= 20)) {
        return num2;
    } else {
        return 0;
    }
}

console.log(max1020(11, 19)); // → 19
console.log(max1020(19, 11)); // → 19
console.log(max1020(11, 9));  //→ 11
console.log(max1020(9, 9));  //→ 0