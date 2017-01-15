//Given three int values, a b c, return the largest.

function intMax(num1, num2, num3) {
    var max = num1;
    if(max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    return max;
}

console.log(intMax(1, 2, 3)); // → 3
console.log(intMax(1, 3, 2)); // → 3
console.log(intMax(3, 2, 1)); // → 3