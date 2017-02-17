//Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

function has77(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === 7 && arr[i+1] === 7) {
            return true;
            break;
        } else if ( arr[i] === 7 && arr[i+2] === 7) {
            return true;
            break;
        }
    }
    return false;
}

console.log(has77([1, 7, 7])); // → true
console.log(has77([1, 7, 1, 7])); // → true
console.log(has77([1, 7, 1, 1, 7])); // → false
