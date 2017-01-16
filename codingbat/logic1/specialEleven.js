//We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator -- see Introduction to Mod

function specialEleven(n) {
    if(n % 11 === 0 || (n - 1) % 11 === 0) {
        return true; 
    } else {
        return false;
    }
}

console.log(specialEleven(22)); // → true
console.log(specialEleven(23)); // → true
console.log(specialEleven(24)); // → false