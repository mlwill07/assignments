//Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.

function shiftLeft(arr) {
    var first = arr.shift();
    arr.push(first);
    return arr;
}

console.log(shiftLeft([6, 2, 5, 3])); // → [2, 5, 3, 6]
console.log(shiftLeft([1, 2])); // → [2, 1]
console.log(shiftLeft([1])); // → [1]