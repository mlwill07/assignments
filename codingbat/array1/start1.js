//Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

function start1(arr, brr) {
    var count = 0;
    if(arr[0] === 1) {
        count++;
    }
    if(brr[0] === 1) {
        count++
    }
    return count;
}

console.log(start1([1, 2, 3], [1, 3])); // → 2
console.log(start1([7, 2, 3], [1])); // → 1
console.log(start1([1, 2], [])); // → 1