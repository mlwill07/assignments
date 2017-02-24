//We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

function notAlone(arr, num) {
    for (var i = 1; i < arr.length-1; i++) {
        if((arr[i] === num) && ((arr[i-1] != num) || (arr[i+1] != num))){
            arr[i] = Math.max(arr[i-1], arr[i+1]);
        }
    }
    return arr;
}

console.log(notAlone([1, 2, 3], 2)); // → [1, 3, 3]
console.log(notAlone([1, 2, 3, 2, 5, 2], 2)); //→ [1, 3, 3, 5, 5, 2]
console.log(notAlone([3, 4], 3)); // → [3, 4]