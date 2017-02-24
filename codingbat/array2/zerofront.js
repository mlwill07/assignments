//Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

function zeroFront(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            output.unshift(arr[i])
        } else {
            output.push(arr[i])
        }
    }
    return output;
}

console.log(zeroFront([1, 0, 0, 1])); // → [0, 0, 1, 1]
console.log(zeroFront([0, 1, 1, 0, 1])); // → [0, 0, 1, 1, 1]
console.log(zeroFront([1, 0])); // → [0, 1]