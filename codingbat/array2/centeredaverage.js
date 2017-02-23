//Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

function centeredAverage(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > Math.min(arr[i], arr[i + 1])) {
            min = Math.min(arr[i], arr[i + 1])
        }
        if (max < Math.max(arr[i], arr[i + 1]))
            max = Math.max(arr[i], arr[i + 1])
    }
    var low = arr.indexOf(min);
    var high = arr.indexOf(max);
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if(i != low && i != high){
            sum += arr[i];
        }
    }
    
    return sum/(arr.length-2);
}

console.log(centeredAverage([1, 2, 3, 4, 100])); // → 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7])); // → 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0])); // → -3