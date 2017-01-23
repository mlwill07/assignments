//Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

function double23(arr) {
    if ((arr.indexOf(2) != arr.lastIndexOf(2)) || (arr.indexOf(3) != arr.lastIndexOf(3))) {
        return true;
    } else {
        return false;
    }
}

console.log(double23([2, 2])); // → true
console.log(double23([3, 3])); // → true
console.log(double23([2, 3])); // → false