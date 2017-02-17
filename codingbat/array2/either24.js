//Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

function either24(arr) {
    var twos = 0;
    var fours = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 2 && arr[i +1] === 2){
            twos++
            i++
        } else if(arr[i] === 4 && arr[i+1] === 4) {
            fours++;
            i++
        }
    }
    if((twos > 0 && fours > 0) || (twos === 0 && fours === 0) ) {
        return false;
    } else {
        return true;
    }
}

console.log(either24([1, 2, 2])); // → true
console.log(either24([4, 4, 1])); // → true
console.log(either24([4, 4, 1, 2, 2])); // → false
console.log(either24([4, 4, 1, 4, 4, 2])); // → true
console.log(either24([4, 4, 1, 4, 4, 2, 2])); // → false