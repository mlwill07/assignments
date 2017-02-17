//Given an array of ints, return true if the array contains no 1's and no 3's.

function lucky13(arr) {
    var ones = 0;
    var threes = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === 1) {
            ones++
        } else if (arr[i] === 3){
            threes++
        }
    }
    if(ones === 0 && threes === 0){
        return true;
    } else {
        return false;
    }
}

console.log(lucky13([0, 2, 4])); // → true
console.log(lucky13([1, 2, 3])); // → false
console.log(lucky13([1, 2, 4])); // → false
