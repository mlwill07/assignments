//Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

function withoutTen(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 10) {
            arr.splice(i, 1);
            arr.push(0);
            i--;
        }
    }
    return arr;
}

console.log(withoutTen([1, 10, 10, 2])); // → [1, 2, 0, 0]
console.log(withoutTen([10, 2, 10])); // → [2, 0, 0]
console.log(withoutTen([1, 99, 10])); // → [1, 99, 0]