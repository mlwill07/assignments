//Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

function sameFirstLast(array) {
    if(array.length >= 1 && array[0] === array[array.length-1]) {
        return true;
    } else {
        return false;
    }
}

console.log(sameFirstLast([1, 2, 3])); // → false
console.log(sameFirstLast([1, 2, 3, 1])); // → true
console.log(sameFirstLast([1, 2, 1])); // → true