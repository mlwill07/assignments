//Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

function sum2(arr) {
    if(arr.length > 1) {
        var sum = arr[0] + arr[1];
    } else {
        sum= arr[0] + arr[0];
    }
    
    return sum; 
}

console.log(sum2([1, 2, 3])); // → 3
console.log(sum2([1, 1])); // → 2
console.log(sum2([1, 1, 1, 1])); // → 2