//Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator

function or35(n) {
    if((n % 3 === 0) || (n % 5 === 0) ){
        return true;
    } else {
        return false;
    }
}

console.log(or35(3)); // → true
console.log(or35(10)); //→ true
console.log(or35(8)); //→ false