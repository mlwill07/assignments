//Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

function twoAsOne(a, b, c) {
    if((a + b === c) || (b + c === a) || (a + c === b)) {
        return true;
    } else {
        return false;
    }
}

console.log(twoAsOne(1, 2, 3)); // → true
console.log(twoAsOne(3, 1, 2)); // → true
console.log(twoAsOne(3, 2, 2)); // → false