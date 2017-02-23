//Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
//
//Example
//
//For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
//sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
//
//Input/Output
//
//[time limit] 4000ms (js)
//[input] array.integer a
//
//If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.
//
//Constraints:
//5 ≤ a.length ≤ 15,
//-1 ≤ a[i] ≤ 200.
//
//[output] array.integer
//
//Sorted array a with all the trees untouched.

function sortByHeight(arr) {
    var trees = [];
    var people = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            trees.push(arr[i]);
        } else {
            people.push(arr[i]);
            trees.push('x');
        }
    }
    
    people.sort(function (a, b) {return a - b});
    
    var j = 0;
    for (var i = 0; i < trees.length; i++) {
        if (trees[i] === 'x') {
            trees[i] = people[j];
            j++
        }
    }
    return trees

}

a = [-1, 150, 190, 170, -1, -1, 160, 180];
b = [-1, -1, -1, -1, 200, -1, 160, 180, -1, 0];

console.log(sortByHeight(a));
console.log(sortByHeight(b));
