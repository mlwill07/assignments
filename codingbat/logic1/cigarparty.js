//When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

function cigarParty(a, b) {
    if(b) {
        if(a >=40) {
            return true;
        } else {
            return false;
        }
    } else {
        if(a >= 40 && a <=60) {
            return true
        } else {
            return false;
        }
    }
}

console.log(cigarParty(30, false)); // → false
console.log(cigarParty(50, false)); // → true
console.log(cigarParty(70, true)); // → true