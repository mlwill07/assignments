var input = "ggggggggxkljfvlsjkfg";

function firstNonRepeat(string) {
    string = string.toLowerCase();
    var uniques = '';
    
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if(string.indexOf(char) === string.lastIndexOf(char)) {
            uniques += char;
        }
    }
    return uniques.charAt(0);
}

console.log(firstNonRepeat(input)); // 'x'
console.log(firstNonRepeat('hheellov')); // 'o'
console.log(firstNonRepeat('miriam')); // 'r'