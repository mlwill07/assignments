//Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

function answerCell(isMorning, isMom, isAsleep) {
    if(isAsleep === true) {
        return false;
    } else if (isMorning === true) {
        if(isMom === true){
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

console.log(answerCell(false, false, false)); // → true
console.log(answerCell(false, false, true)); // → false
console.log(answerCell(true, false, false)); // → false
console.log(answerCell(true, true, false)); // → true