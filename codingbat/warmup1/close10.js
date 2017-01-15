//Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

function close10(num1, num2) {
    if(Math.abs(10 - num1) === (Math.abs(10 - num2))) {
       return 0;
    } else if(Math.abs(10 - num1) < (Math.abs(10 - num2))) {
        return num1
    } else if (Math.abs(10 - num1) > (Math.abs(10 - num2))) {
        return num2;           
    }
}

console.log(close10(8, 13)) // → 8
console.log(close10(13, 8)) // → 8
console.log(close10(13, 7)) // → 0