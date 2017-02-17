//Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

function modThree(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if(arr[i+1] % 2 === 0) {
                if(arr[i+2] % 2 === 0){
                    return true
                }
            }
        } else if (arr[i] % 2 > 0){
            if(arr[i + 1] % 2 > 0) {
                if (arr[i +2] % 2 > 0) {
                    return true
                }
            }
        }
    }
    return false
}

//this is bad!

console.log(modThree([2, 1, 3, 5])); // → true
console.log(modThree([2, 1, 2, 5])); // → false
console.log(modThree([2, 4, 2, 5])); // → true