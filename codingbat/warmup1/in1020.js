//Given 2 int values, return true if either of them is in the range 10..20 inclusive.

function in1020(num1, num2) {
    if((num1 >= 10 && num1 <= 20) || (num2 >= 10 && num2 <= 20)) {
        return true;
    }  else {
        return false;
    }
}

console.log(in1020(12, 99)); // → true
console.log(in1020(21, 12)); // → true
console.log(in1020(8, 99)); // → false