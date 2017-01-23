//Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

function rotateLeft3(a) {
    b = a.shift();
    a.push(b);
    return a;
}

console.log(rotateLeft3([1, 2, 3])); // → [2, 3, 1]
console.log(rotateLeft3([5, 11, 9])); // → [11, 9, 5]
console.log(rotateLeft3([7, 0, 0])); // → [0, 0, 7]