//Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

function sum67(arr) {
    var sum = 0;
    var skip = false;
    for (var i =0; i < arr.length; i++) {
        if (arr[i] === 6) {
            skip = true;
        } else if ( arr[i] === 7 && skip === true ){
            skip = false
        } else if (skip === false) {
            sum += arr[i]
        }
    }
    return sum;
}

console.log(sum67([1, 2, 2])); // → 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7])); // → 5
console.log(sum67([1, 1, 6, 7, 2])); // → 4
console.log(sum67([1, 1, 6, 2, 7, 1, 6, 7, 1])); // → 4