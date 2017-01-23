//Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

function frontPiece(arr) {
    return arr.splice(0, 2);
}

console.log(frontPiece([1, 2, 3])); // → [1, 2]
console.log(frontPiece([1, 2])); // → [1, 2]
console.log(frontPiece([1])); // → [1]