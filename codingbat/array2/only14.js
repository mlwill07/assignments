//Given an array of ints, return true if every element is a 1 or a 4.

function only14(arr) {
    for (var i = 0; i < arr.length; i++){
        if(arr[i] != 1 && arr[i] != 4) {
            return false;
        }
    }
    return true;
}

console.log(only14([1, 4, 1, 4])); // → true
console.log(only14([1, 4, 2, 4])); // → false
console.log(only14([1, 1])); // → true