//Return true if the string "cat" and "dog" appear the same number of times in the given string.

function catDog(str) {
    var catcount = 0;
    var dogcount = 0;
    for (var i = 0; i < str.length; i++){
        if(str.substring(i).search('cat') >= 0) {
            i += str.substring(i).search('cat');
            catcount++
        }
    }
    for (var j = 0; j < str.length; j++){
        if(str.substring(j).search('dog') >= 0) {
            j += str.substring(j).search('dog');
            dogcount++
        }
    }
    if (catcount === dogcount) {
        return true;
    } else {
        return false;
    }
}

console.log(catDog("catdog")); // → true
console.log(catDog("catcat")); // → false
console.log(catDog("1cat1cadodog")); // → true
console.log(catDog("catcatdogdog")); // → true