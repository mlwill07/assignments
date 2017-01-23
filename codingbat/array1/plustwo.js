//Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

//function plusTwo(arr, brr) {
//    var output =[];
//    output.push(arr[0], arr[1], brr[0], brr[1]);
//    return output;
//}

function plusTwo(arr, brr) {
    var output = arr.concat(brr);
    return output;
}

console.log(plusTwo([1, 2], [3, 4])); // → [1, 2, 3, 4]
console.log(plusTwo([4, 4], [2, 2])); // → [4, 4, 2, 2]
console.log(plusTwo([9, 2], [3, 4])); // → [9, 2, 3, 4]