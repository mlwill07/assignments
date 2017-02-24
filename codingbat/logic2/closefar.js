//Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

function closeFar(a, b, c) {
    if (
        ((Math.abs(a - b) > 2) && (Math.abs(a - c) <= 1)) 
        || 
        ((Math.abs(a - b) <= 1) && (Math.abs(a - c) > 2)) 
    ) {
        return true
    } else {
        return false;
    }
}

console.log(closeFar(1, 2, 10)); // → true
console.log(closeFar(1, 2, 3)); // → false -- according to the description this should be true? 2 or more is inclusive of 2?
console.log(closeFar(4, 1, 3)); // → true
