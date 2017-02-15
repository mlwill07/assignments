//Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

function sum13(arr) {
    var sum = 0;
    if(arr.length === 0){
        return sum;
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 13){
            i += 1;
        } else {
            sum += arr[i];
        }
    }  
    }
    return sum;
}

console.log(sum13([1, 2, 2, 1])) // → 6
console.log(sum13([1, 1])) // → 2
console.log(sum13([])) // → 0
console.log(sum13([1, 2, 2, 1, 13])) // → 6
console.log(sum13([13, 2, 2, 1, 13])) // → 3
console.log(sum13([1, 2, 13, 2, 1, 13])) // → 4