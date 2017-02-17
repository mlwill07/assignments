//Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

function sum28(arr) {
    var sum2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 2){
            sum2 += arr[i];
        }
    }
    if(sum2 === 8){
        return true;
    } else {
        return false;
    }
    
}

console.log(sum28([2, 3, 2, 2, 4, 2])); // → true
console.log(sum28([2, 3, 2, 2, 4, 2, 2])); // → false
console.log(sum28([1, 2, 3, 4])); // → false