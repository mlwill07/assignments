//You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
//
//Example
//
//For inputArray = [1, 1, 1], the output should be
//arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
    var output = 0;
    for (var i = 0; i < inputArray.length; i++){
        if(inputArray[i] >= inputArray[i + 1]){
            inputArray[i + 1]++;
            i--;
            output++;
        }
    }
    return output;
}

console.log(arrayChange([1,1,1])); // 3
console.log(arrayChange([-1000, 0, -2, 0])); // 5
console.log(arrayChange([2, 1, 10, 1])); // 12
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); // 13