//Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

function inOrder(a, b, c, bok) {
    if(bok) {
        if(c > b) {
            return true;
        } else {
            return false;
        }
    } else {
        if(b > a && c > b) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(inOrder(1, 2, 4, false)); // → true
console.log(inOrder(1, 2, 1, false)); // → false
console.log(inOrder(1, 1, 2, true)); // → true
console.log(inOrder(1, 1, 2, false)); // → false