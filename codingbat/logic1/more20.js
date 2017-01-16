//Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also: Introduction to Mod

function more20(n) {
    if(n % 20 === 1 || n % 20 === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(more20(20)); // → false
console.log(more20(21)); // → true
console.log(more20(22)); // → true