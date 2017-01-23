//Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

function maxTriple(arr) {
    return Math.max(arr[0], arr[(arr.length-1)], arr[(Math.floor(arr.length/2))]);
}

console.log(maxTriple([1, 2, 3])); // → 3
console.log(maxTriple([1, 5, 3])); // → 5
console.log(maxTriple([5, 2, 3])); // → 5