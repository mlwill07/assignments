
function findUniques() {
    var uniques = [];
    var dupes = [];
    for (var i = 0; i < arguments.length; i++) {
        for(var j = 0; j < arguments[i].length; j++) {
            
            if((uniques.indexOf(arguments[i][j]) === -1) && (dupes.indexOf(arguments[i][j]) === -1)) {
                uniques.push(arguments[i][j]);
            }  else if (uniques.indexOf(arguments[i][j]) >= 0)  {
                var index = uniques.indexOf(arguments[i][j]);
                uniques.splice(index, 1);
                dupes.push(arguments[i][j]);    
            } 
        }
    }
    return uniques;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));  // [5, 8, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 3, 5], [8, 5, 9, 10], [5]));  // [2, 3, 8, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 2, 6], [9, 10]));  // [5, 6, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 2], [8, 9, 10], [9, 10, 11, 12]));  // [5, 8, 11, 12]  
