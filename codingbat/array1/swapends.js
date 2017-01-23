//Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

function swapEnds(arr) {
    var last = arr.pop();
    var first = arr.shift();
    arr.unshift(last);
    arr.push(first);
    return arr;
}

console.log(swapEnds([1, 2, 3, 4])); // → [4, 2, 3, 1]
console.log(swapEnds([1, 2, 3])); // → [3, 2, 1]
console.log(swapEnds([8, 6, 7, 9, 5])); // → [5, 6, 7, 9, 8]