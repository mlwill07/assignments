//For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

function tenRun(arr) {
    var tens = 1;
    for (var i = 0; i <arr.length; i++) {
        if(arr[i] % 10 === 0) {
            tens = arr[i];
        } else {
            if(tens > 1) {
                arr[i] = tens;
            }
        }
        
    }
    return arr;
}

console.log(tenRun([2, 10, 3, 4, 20, 5])); // → [2, 10, 10, 10, 20, 20]
console.log(tenRun([10, 1, 20, 2])); // → [10, 10, 20, 20]
console.log(tenRun([10, 1, 9, 20])); // → [10, 10, 10, 20]