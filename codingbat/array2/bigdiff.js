//Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

function bigDiff(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (min > Math.min(arr[i], arr[i + 1])){
            min = Math.min(arr[i], arr[i+ 1])
        }
        if (max < Math.max(arr[i], arr[i + 1]))
         max = Math.max(arr[i], arr[i + 1 ])
    }
    return max - min;
}

console.log(bigDiff([10, 3, 5, 6])) // → 7
console.log(bigDiff([7, 2, 10, 9])) // → 8
console.log(bigDiff([2, 10, 7, 2])) // → 8