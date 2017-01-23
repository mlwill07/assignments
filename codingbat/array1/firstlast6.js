//Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

function firstLast6(array) {
    if(array.indexOf(6) === 0 || array.lastIndexOf(6) === array.length -1) {
        return true;
    } else {
        return false;
    }
}

console.log(firstLast6([1, 2, 6]) ); // → true
console.log(firstLast6([6, 1, 2, 3]) ); // → true
console.log(firstLast6([13, 6, 1, 2, 3])); // → false