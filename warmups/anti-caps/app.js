function antiCaps(string) {
    var finalstring = '';
    for (var i = 0; i < string.length; i++) {
        if(isCaps(string[i])) {
            finalstring += string[i].toLowerCase();
        } else {
            finalstring += string[i].toUpperCase();
        }
    }
    return finalstring;
}

function isCaps(letter) {  
  return letter === letter.toUpperCase();
}

console.log(antiCaps('Hello'));
console.log(antiCaps('racEcar'));
console.log(antiCaps('bAnAnA'));
