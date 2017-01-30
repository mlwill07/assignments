//Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

function xyzMiddle(string) {
    
}

console.log(xyzMiddle("AAxyzBB")); // → true
console.log(xyzMiddle("AxyzBB")); // → true
console.log(xyzMiddle("AAAxyzBB")); // → true
console.log(xyzMiddle("AxyzBBB")); // → false
console.log(xyzMiddle("AAAxyzBBB")); // → true
console.log(xyzMiddle("AAAxyzB")); // → false