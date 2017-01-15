//Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

function in3050(num1, num2) {
    if ((num1 >= 30 && num1 <=40) && (num2 >= 30 && num2 <= 40)){
        return true;
    }
    if ((num1 >= 40 && num1 <=50) && (num2 >= 40 && num2 <= 50)){
        return true;
    } else {
        return false;
    }
}

console.log(in3050(30, 31)); // → true
console.log(in3050(30, 41)); // → false
console.log(in3050(40, 50)); // → true