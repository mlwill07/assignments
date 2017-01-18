//Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false. See also: Introduction to Mod

function less20(n) {
    if((n % 20 === 18) || (n % 20  === 19 )) {
        return true;
    } else {
        return false;
    }
}

console.log(less20(18)); // → true
console.log(less20(19)); // → true
console.log(less20(20)); // → false
console.log(less20(17)); // → false
console.log(less20(38)); // → true