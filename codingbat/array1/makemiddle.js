//Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

function makeMiddle(arr) {
    return arr.slice((arr.length/2)-1, (arr.length/2) + 1);
    
}

console.log(makeMiddle([1, 2, 3, 4])); // → [2, 3]
console.log(makeMiddle([7, 1, 2, 3, 4, 9])); // → [2, 3]
console.log(makeMiddle([1, 2])); //→ [1, 2]
