//Given an array of ints, return true if it contains no 1's or it contains no 4's.

function no14(arr) {
    var ones = 0;
    var fours = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            ones++
        } else if (arr[i] === 4) {
            fours++
        }
    }
    if(ones === 0 && fours === 0) {
        return false;
    } else if(ones === 0 || fours === 0) {
        return true
    } else {
        return false;
    }
}

console.log(no14([1, 2, 3])); // → true
console.log(no14([1, 2, 3, 4])); // → false
console.log(no14([2, 3, 4])); // → true
console.log(no14([2, 3, 8])); // → false