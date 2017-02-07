function isPalindrome(string) {
    string = string.toLowerCase();
    string = string.replace(/[\W_]/g, '');
    var count = 0;
    for (var i = 0, j = string.length-1; i < string.length; i++, j--){
        if(string.charAt(i) === string.charAt(j)) {
             count++;
        }
    }
    if ( count === string.length ) {
      return true;
    } else {
      return false;
    }
    
}

console.log(isPalindrome("Star Rats!"));  // true  
console.log(isPalindrome("palindrome"));  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true  
console.log(isPalindrome("Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!"));  // true  