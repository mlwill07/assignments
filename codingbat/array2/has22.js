//Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

function has22(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 2 && arr[i+1]=== 2){
            return true;
            break;
        }  
    }
    return false;
}

console.log(has22([1, 2, 2])); // → true
console.log(has22([1, 2, 1, 2])); // → false
console.log(has22([2, 1, 2])); // → false
console.log(has22([2, 1, 2, 1, 2, 2])); // → true