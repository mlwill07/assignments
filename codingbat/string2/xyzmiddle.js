//Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

function xyzMiddle(string) {
    var start = string.indexOf('xyz');
    var begin = string.substring(0, start);
    var end = string.substring(start + 3)
    if (Math.abs(begin.length - end.length) >= 0 && Math.abs(begin.length - end.length) <= 1) {
        return true    
    } else {
        return false;
    }
}

console.log(xyzMiddle("AAxyzBB")); // → true
console.log(xyzMiddle("AxyzBB")); // → true
console.log(xyzMiddle("AAAxyzBB")); // → true
console.log(xyzMiddle("AxyzBBB")); // → false
console.log(xyzMiddle("AAAxyzBBB")); // → true
console.log(xyzMiddle("AAAxyzB")); // → false