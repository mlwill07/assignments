//Given an int array length 2, return true if it contains a 2 or a 3.

function has23(arr) {
    if(arr[0] === 2 || arr[0] === 3 || arr[1] === 3 || arr[1] === 3) {
        return true;
    } else {
        return false;
    }
}

console.log(has23([2, 5])); // → true
console.log(has23([4, 3])); // → true
console.log(has23([4, 5])); // → false