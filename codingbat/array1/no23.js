//Given an int array length 2, return true if it does not contain a 2 or 3.

function no23(arr) {
   return arr.every(check);
    
}

function check(num){
    if(num != 2 && num != 3) {
        return true;
    }
}

console.log(no23([4, 5])); // → true
console.log(no23([4, 2])); // → false
console.log(no23([3, 5])); // → false