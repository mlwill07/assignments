function namechar(name) {
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}

function beanCount(string, c) {
    var found = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === c) {
            console.log("the first '" + c + "' is at index " + i);
            found++;
            break;
        }
    }
    if (found < 1) {
        console.log('Not here!');
    }
}

function beanCount2(string, c) {
    for (var i = 0; i <= string.length; i++) {
        if (string[i] === c) {
            console.log("the first '" + c + "' is at index " + i);
            break;
        } 
    } 
    return "not here"
    }


function count(arrayOfNumbers) {
    var found = 0;
    for (var i = 0; i <= arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] === 42) {
            found++;
            break;
            console.log(i);
        }
        }
    if (found < 1) {
            console.log('Not here!');
    }
    
//function count2(arrayOfNumbers) {
//    for (var i = 0; i <= arrayOfNumbers.length; i++) {
//        if (arrayOfNumbers[i] === 42) {
//            console.log("42 is at index " + i);
//            break;
//        }
//        return 'Not here!';
//}
//} doesn't work.....?


    function min(arrayN) {
        var small = arrayN[0];
        for (var i = 0; i < arrayN.length; i++) {
            //console.log(arrayN[i]);
            if (small > arrayN[i]) {
                small = arrayN[i]
            }
        }
        console.log(small)
    }