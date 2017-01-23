//We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

function unlucky1(arr) {
    if((arr.indexOf(1) < 2) && arr[arr.indexOf(1) + 1] ===3)  {
        return true
    } else if((arr.lastIndexOf(1) >= arr.length-3) && arr[arr.lastIndexOf(1) + 1] === 3) {
        return true;
    }else {
        return false;
    }
}

console.log(unlucky1([1, 3, 4, 5])); // → true
console.log(unlucky1([2, 1, 3, 4, 5])); // → true
console.log(unlucky1([1, 1, 1])); // → false
console.log(unlucky1([1, 1, 1, 3])); // → true