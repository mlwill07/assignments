Array.prototype.myFilter = function(callback) {
    var array = this;
    var filteredArray = [];
    for(var i = 0; i < array.length; i++) {
        if(callback(array[i])) {
           filteredArray.push(array[i])
        } 
    }
    return filteredArray; 
}

///// tests /////

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var newArray = numericArray.myFilter(function (element) {  
  if (element > 5) {
    return false;
  } else {
    return true;
  }
});

var numericArray2 = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers =  numericArray2.myFilter(function (element) {  
  return element <= 5;
});

var numericArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evensOnly = numericArray3.myFilter(function(element) {
    return element % 2 === 0;
});


var weirdArray = ['a', 1, '46', 3, true, 76, 'cat'];

var numbersOnly = weirdArray.myFilter(function(element) {
    return !isNaN(element);
});

var numbersOnly2 = weirdArray.filter(function(element) {
    return !isNaN(element);
});

var ourArray = ['pan', 'can', 'apple', 'sauce'];

var ourNewArray = ourArray.myFilter(function(element) {
    return element.length < 4;
});

var ourNewArray2 = ourArray.filter(function(item){
    return item.length < 4;
})

console.log(newArray); // --> 3, 4, 1, 3, 5
console.log(noLargeNumbers); // --> 3, 4, 1, 3, 4
console.log(evensOnly); // 2, 4, 6, 8, 10
console.log(numbersOnly, weirdArray); // 1, '46',  3, true,  76
console.log(numbersOnly2, weirdArray); // 1, '46', 3, true, 76
console.log(ourNewArray, ourArray); // 1, '46', 3, true, 76
console.log(ourNewArray2, ourArray); // 1, '46', 3, true, 76