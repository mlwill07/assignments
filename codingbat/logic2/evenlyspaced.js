//Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

function evenlySpaced(a, b, c) {
    if((Math.abs(a-b) === Math.abs(b-c)) || (Math.abs(a-c) === Math.abs(b-c)) || (Math.abs(a-c) === Math.abs(a-b))) {
        return true;
    } else {
        return false;
    }
}

console.log(evenlySpaced(2, 4, 6)); // → true
console.log(evenlySpaced(4, 6, 2)); // → true
console.log(evenlySpaced(4, 6, 3)); // → false