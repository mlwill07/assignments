//Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

function sameStarChar(str) {
    var count = 0;
    var star = 0;
    for(var i = 0; i < str.length; i++) {
        if(str.charAt(i) === '*') {
            star++;
            if((i === 0) || (i === str.length-1)) {
                count++
            } else if(str.charAt(i-1) === str.charAt(i+1)){
                count++
            }
        } 
    }
    if(star === count){
        return true
    } else {
        return false
    }
}

console.log(sameStarChar("xy*yzz")) // → true
console.log(sameStarChar("xy*zzz")) // → false
console.log(sameStarChar("*xa*az")) // → true