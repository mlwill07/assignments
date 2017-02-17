//Given an array of ints, return true if the number of 1's is greater than the number of 4's

function more14(arr) {
    var ones = 0;
    var fours = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === 1) {
            ones++
        } else if(arr[i] === 4){
            fours++
        }
    }
    if(ones > fours) {
        return true;
    } else {
        return false;
    }
}

console.log(more14([1, 4, 1])); // → true
console.log(more14([1, 4, 1, 4])); // → false
console.log(more14([1, 1])); // → true