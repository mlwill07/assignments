//Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

function middleWay(arr, brr) {
    var mid = [];
    mid.push(arr[Math.floor((arr.length-1)/2)]);
    mid.push(brr[Math.floor((arr.length-1)/2)])
    return mid;
}

console.log(middleWay([1, 2, 3], [4, 5, 6])); // → [2, 5]
console.log(middleWay([7, 7, 7], [3, 8, 0])); // → [7, 8]
console.log(middleWay([5, 2, 9], [1, 4, 5])); // → [2, 4]