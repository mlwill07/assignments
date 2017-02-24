//Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

function zeroMax(arr){
    var odds = 1;
    for (var  i = 0; i < arr.length; i++){
        if(arr[i] === 0) {
            for (var j = i + 1; j < arr.length; j++){
                if(arr[j] % 2 != 0) {
                    var odds = Math.max(odds, arr[j]);
                    arr[i] = odds
                }
            }
        }
    }
    return arr
}

console.log(zeroMax([0, 5, 0, 3])); // → [5, 5, 3, 3]
console.log(zeroMax([0, 4, 0, 3])); // → [3, 4, 3, 3]
console.log(zeroMax([0, 1, 0])); // → [1, 1, 0]
console.log(zeroMax([0, 1, 0, 2, 4, 7])); // → [7, 1, 7, 2, 4, 7]
console.log(zeroMax([0, 1, 0, 2, 4])); // → [1, 1, 0, 2, 4]