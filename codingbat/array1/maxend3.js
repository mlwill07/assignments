//Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

function maxEnd3(c) {
    var d = Math.max(c[0], c[c.length-1]);
    c.fill(d);
    return c;
}

console.log(maxEnd3([1, 2, 3])); // → [3, 3, 3]
console.log(maxEnd3([11, 5, 9])); // → [11, 11, 11]
console.log(maxEnd3([2, 11, 3])); // → [3, 3, 3]