//Given an array of ints, return true if every 2 that appears in the array is next to another 2.

function twoTwo(arr){
    var count = 0;
    var doublecount = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === 2 && arr[i+1] === 2){
            count++;
            doublecount++;
            i++
        } else if( arr[i] === 2 && arr[i+1] != 2){
            count++;
            i++;
        }
    }
    if(count === doublecount){
        return true;
    } else {
        return false;
    }
}

console.log(twoTwo([4, 2, 2, 3])); // → true
console.log(twoTwo([4, 2, 2, 3, 2, 2, 4, 2, 2])); // → true
console.log(twoTwo([2, 2, 4])); // → true
console.log(twoTwo([2, 2, 4, 2])); // → false
console.log(twoTwo([2, 2, 4, 2, 2])); // → true
console.log(twoTwo([2, 2, 4, 2, 4])); // → false
console.log(twoTwo([2, 2, 2, 2, 4])); // → true