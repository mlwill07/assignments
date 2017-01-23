//Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

function midThree(arr) {
    var output = arr.splice((Math.floor((arr.length/2) - 1)), 3);
    return output;
}

console.log(midThree([1, 2, 3, 4, 5])); // → [2, 3, 4]
console.log(midThree([8, 6, 7, 5, 3, 0, 9])); // → [7, 5, 3]
console.log(midThree([1, 2, 3])); // → [1, 2, 3]