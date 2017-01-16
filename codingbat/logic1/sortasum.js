//Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

function sortaSum(a, b) {
    if (a + b >= 10 && a + b <= 19) {
        return 20;
    } else {
        return a + b;
    }
}

console.log(sortaSum(3, 4)); // → 7
console.log(sortaSum(9, 4)); // → 20
console.log(sortaSum(10, 11)); // → 21