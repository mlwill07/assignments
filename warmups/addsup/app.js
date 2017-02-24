//Given two parameters - an integer and an array of integers - return true if some combination of the array of integers could sum up to the single integer parameter.

function addsUp(int, arr) {
  
    
}

addsUp(10, [5, 1, 5]) // true, because 5 + 5 === 10  
addsUp(10, [6, 2, 5, 1, 5]) // true, because 5 + 5 === 10  
addsUp(10, [2, 3, 1, 5])  // true, because 2 + 3 + 5 === 10  
addsUp(10, [4, 2, 5]) // false, no combination could add to 10  