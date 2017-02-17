//We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

function isEverywhere(arr, num){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === num || arr[i +1] === num){
            count++
        }
    }
    if (count === arr.length -1) {
        return true;
    } else {
        return false;
    }
}

console.log(isEverywhere([1, 2, 1, 3], 1)); // → true
console.log(isEverywhere([1, 2, 1, 3], 2)); // → false
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // → false
console.log(isEverywhere([1, 2, 1, 3, 1, 4], 1)); // → true