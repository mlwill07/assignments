//Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

function tripleUp(arr) {
    for(var i = 0; i < arr.length; i++){
        if((arr[i+1] === arr[i]+1) && (arr[i+2] === arr[i] + 2)) {
            return true;
            
        }
    }
    return false;
}

console.log(tripleUp([1, 4, 5, 6, 2])); // → true
console.log(tripleUp([1, 2, 3])); // → true
console.log(tripleUp([1, 2, 4])); // → false