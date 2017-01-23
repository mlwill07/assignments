//Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.

function makeLast(arr) {
    var output = [];
    for(var i = 0; i < arr.length * 2; i++) {
        if ( i === (arr.length*2)-1) {
            output.push(arr[arr.length-1]);
        } else {
            output.push(0);
        }
    }
    return output;
}

console.log(makeLast([4, 5, 6])); // → [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2])); // → [0, 0, 0, 2]
console.log(makeLast([3])); // → [0, 3]