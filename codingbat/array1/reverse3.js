//Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

function reverse3(b){
   return b.reverse();
}

console.log(reverse3([1, 2, 3])); // → [3, 2, 1]
console.log(reverse3([5, 11, 9])); // → [9, 11, 5]
console.log(reverse3([7, 0, 0])); // → [0, 0, 7]