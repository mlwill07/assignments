function oneOrTwo(x, y) {
    if (x > y) {
        console.log(y);
    } else if (x < y) {
        console.log(x)
    } 
    else {console.log('Equal ' + x + " " + y)
           }
    }

//var x = Number(prompt('what number?'));
//var y = Number(prompt('what number?'));

oneOrTwo(3, 6);

/////

function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
        console.log('Monkey Trouble is true!');
    } else { console.log('Monkey Trouble is false!')}
}

function monkeyThree(aSmile, bSmile) {
    return aSmile === bSmile; //returns true or false
}

//function monkeyTwo(asmile, bsmile) {
//    if (aSmile === bSmile) {
//        console.log("You're in Trouble")
//    } else {console.log("Phew!")}
//}

//var aSmile = true;
//var bSmile = true;

monkeyTrouble(aSmile, bSmile);




function greeting() {
    var hours = new Date().getHours();
    if(hours < 12) {
        console.log('Good Morning!');
    } else if (hours < 18) {
        console.log('Good Afternoon!');
    } else {console.log('Good Evening!')
           } 
}

greeting();