//Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

function lessBy10(a, b, c) {
    if(((a - 10) >= (b || c)) || ((b - 10) >= (a || c)) || ((c - 10) >= (a || b))) {
        return true;
    } else {
        return false;
    }
}

console.log(lessBy10(1, 7, 11)); // → true
console.log(lessBy10(1, 7, 10)); // → false
console.log(lessBy10(11, 1, 7)); // → true
console.log(lessBy10(22, 11, 7)); // → true