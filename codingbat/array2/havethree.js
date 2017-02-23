//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

function haveThree(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 3){
            count++;
            i++
        }
    }
    if (count === 3){
        return true;
    } else {
        return false;
    }
    
}

console.log(haveThree([3, 1, 3, 1, 3])); //→ true
console.log(haveThree([3, 1, 3, 3])); // → false
console.log(haveThree([3, 4, 3, 3, 4])); // → false
console.log(haveThree([3, 3, 4, 3, 3, 4, 3])); // → true
console.log(haveThree([3, 4, 3, 4, 3, 3])); // → true
console.log(haveThree([3, 4, 3, 4, 3, 3, 4, 3])); // → false