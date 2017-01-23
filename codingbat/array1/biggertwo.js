//Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

function biggerTwo(arr, brr) {
    a = arr[0] + arr[1];
    b = brr[0] + brr[1];
    if(a === b || a > b) {
        return arr;
    } else if (b > a) {
        return brr;
    }
}

console.log(biggerTwo([1, 2], [3, 4])); // → [3, 4]
console.log(biggerTwo([3, 4], [1, 2])); // → [3, 4]
console.log(biggerTwo([1, 1], [1, 2])); // → [1, 2]
