//Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

function countEvens(arr) {
    var count = 0;
    for ( var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            count++
        }
    }
    return count;
}

console.log(countEvens([2, 1, 2, 3, 4])) // → 3
console.log(countEvens([2, 2, 0])) // → 3