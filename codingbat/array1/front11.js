//Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

function front11(arr, brr) {
    var output = [];
    if(arr.length > 0)  {
       output.push(arr[0]);
    } 
    if (brr.length > 0) {
        output.push(brr[0]);
    }
    return output;
}

console.log(front11([1, 2, 3], [7, 9, 8])); // → [1, 7]
console.log(front11([1], [2])); // → [1, 2]
console.log(front11([1, 7], [])); // → [1]