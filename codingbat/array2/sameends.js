//Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.

function sameEnds(arr, num) {
    var count = 0;
    var begin = arr.splice(0, num);
    var end = arr.splice(arr.length-num)
    for (var i = 0; i < begin.length; i++){
        if(begin[i] === end[i]){
            count++
        }
    }
    if(count === begin.length){
        return true;
    } else {
        return false;
    }
}

console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 1)); // → false
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2)); // → true
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 3)); // → false
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6, 45], 3)); // → true