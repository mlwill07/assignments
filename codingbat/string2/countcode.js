//Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

//function countCode(string) {
//    var count = 0;
//    for (var i = 0; i < string.length; i++) {
//        if((string.substring(i).search('co') >=0) && (string.substring(i + 3).search('e') >= 0)) {
//            count++;
//            i += 3;
//        }
//    }
//    return count;
//}

//function countCode(string) {
//    var count = 0;
//    for (var i = 0; i < string.length; i++) {
//        if((string.substr(i, 2) === 'co') && (string.substr(i + 3, 1) === 'e')) {
//            count++;
//        }
//    }
//    return count;
//}

function countCode(string) {
    return string.match(/co.e/gi).length;
}

console.log(countCode("aaacodebbb")); // → 1
console.log(countCode("codexxcode")); // → 2
console.log(countCode("cozexxcope")); // → 2