//Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

function fix23(arr) {
    var two = arr.indexOf(2);
    if(arr[two+1] === 3) {
        arr[two+1] = 0;
    }
    return arr;
}

console.log(fix23([1, 2, 3])); // → [1, 2, 0]
console.log(fix23([2, 3, 5])); // → [2, 0, 5]
console.log(fix23([1, 2, 1])); // → [1, 2, 1]