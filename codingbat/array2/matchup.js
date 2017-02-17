//Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

function matchUp(arr1, arr2) {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) {
        if( ( ( (arr1[i] - arr2[i]) <= 2) && ((arr1[i] - arr2[i]) > 0)) || ( ( (arr2[i] - arr1[i]) <= 2) && ( (arr2[i] - arr1[i]) > 0) ) ) {
            count++
        }
    }
    return count
}

console.log(matchUp([1, 2, 3], [2, 3, 10])); // → 2
console.log(matchUp([1, 2, 3], [2, 3, 5])); // → 3
console.log(matchUp([1, 2, 3], [2, 3, 3])); // → 2
console.log(matchUp([2, 2, 3], [1, 3, 3])); // → 2