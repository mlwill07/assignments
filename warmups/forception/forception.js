var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(array, string) {
    string = string.toUpperCase();
    var looper = [];
    for(var i = 0 ; i < array.length; i++) {
        looper.push(array[i] + ":")
        for (var j = 0; j < string.length; j++) {
            looper.push(string[j])
        }
    }
    return looper;
}

console.log(forception(people, alphabet));