//Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

function post4(arr){
    return arr.splice(arr.lastIndexOf(4)+1);
}

console.log(post4([2, 4, 1, 2])); // → [1, 2]
console.log(post4([4, 1, 4, 2])); // → [2]
console.log(post4([4, 4, 1, 2, 3])); // → [1, 2, 3]