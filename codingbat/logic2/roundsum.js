
//For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

function roundSum(a, b, c) {
    return sumhelper(a) + sumhelper(b) + sumhelper(c);
}

function sumhelper(num) {
   var num2 = num.toString().split("");
    if(num < 10) {
        num2.unshift(0)
    }
    if(parseInt(num2[1]) >= 5) {
        return ((parseInt(num2[0])+1) * 10);
    } else {
        return (parseInt(num2[0]) * 10);
    }
}

console.log(roundSum(16, 17, 18)); // → 60
console.log(roundSum(12, 13, 14)); // → 30
console.log(roundSum(6, 4, 4)); // → 10