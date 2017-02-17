//Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

function has12(arr) {
    var one = arr.indexOf(1);
    var two = arr.indexOf(2);
    if (one < two) {
        return true;
    } else {
        return false;
    }
}

console.log(has12([1, 3, 2])); // → true
console.log(has12([3, 1, 2])); // → true
console.log(has12([3, 1, 4, 5, 2])); // → true
console.log(has12([3, 1, 4, 5])); // → false
console.log(has12([2, 1, 4, 5])); // → false