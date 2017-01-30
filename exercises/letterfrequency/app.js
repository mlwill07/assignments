//Find the frequency of all the letters in a given word or phrase, and print them to the console.

//function letterFrequency(string) {
//    string = string.toLowerCase();
//    string = string.split('').sort().join('');
//    count = [];
//    for (var i =0; i < string.length; i++) {
//        var char = string.charAt(i);
//        var frequency = 0;
//        frequency = string.lastIndexOf(char) - string.indexOf(char) +1;
//        i = string.lastIndexOf(char);
//        count.push([char, frequency])
//    }
//    count.sort();
//    console.log(count);
//}

function letterFrequency(string) {
    string = string.toLowerCase();
    var count = {};
    var uniques = '';
    for (var i =0; i < string.length; i++) {
        var char = string.charAt(i);
        if(count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
            uniques += char
        }
    }
    console.log(count);
    console.log(uniques);
    
    var sortedKeys = Object.keys(count).sort(function(a,b) {
        return count[b] - count[a];
    });
    var sortedFrequency = {};
    for (var k = 0; k < sortedKeys.length; k++) {
        sortedFrequency[sortedKeys[k]] = count[sortedKeys[k]]
    }
    console.log(sortedFrequency);
//    keys = keys.join('');
//    console.log(keys);
    
}

//function noDuplicates(string) {
//    string = string.toLowerCase();
//    var unique = '';
//    var misfits = '';
//    for(var i = 0; i < string.length; i++) {
//        if(unique.indexOf(string[i]) >= 0){
//            misfits += string[i];
//        } else {
//            unique += string[i];
//        }
//    }
//    console.log(unique);
//    console.log(misfits);
//}
//
//noDuplicates(input);


letterFrequency("slimy smelly solution");
letterFrequency("Hello world!");