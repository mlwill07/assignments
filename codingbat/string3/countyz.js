//Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

function countYZ(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if(i === str.length - 1 && (str.charAt(i) === 'y' || str.charAt(i) === 'z')){
            count++
        } else if (str.charAt(i) === 'y' || str.charAt(i) === 'z') {
            var next  = str.charAt(i+1)
                if (/\W/.test(next)) {
                    count++
                }
        }
        
    }
    return count;
}

    console.log(countYZ("fez day")); // → 2
    console.log(countYZ("day fez")); // → 2
    console.log(countYZ("day fyyyz")); // → 2
    console.log(countYZ("day fyyyz fez yay")); // → 4