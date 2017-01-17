function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

var max = function(a, b, c) {
    var maxi = a;
    if (maxi < b) {
        maxi = b;
    }
    if (maxi < c ) {
        maxi = c;
    } 
    
    return maxi;
}

console.log(max(2,4,1));
console.log(max(4,2,1));
console.log(max(1,2,3));

function isEven(a) {
    if(a % 2 === 0) {
        return "even";
    } else {
        return "odd"
    }
}

console.log(isEven(2));
console.log(isEven(3));

function less20(string) {
    if(string.length < 20) {
        return string + string;
    } else {
        string = string.substr(0, Math.floor(string.length/2));
        return string;
    }
}

console.log(less20('hello'));
console.log(less20('hello my name is miriam'));

function fib(n) {
    var array = [];
    var x = 1;
    var y = 0;
    for(var i = 0; i <= n; i++) {
        array.push(x);
        if(array.length === 1) {
            x = x;
        } else {
            x = x + array[i-1];
        }
        if ( array.length === n) {
            break;
        }
    }
    for(var j = 0; j < n; j++) {
        y += array[j];
    }
    return y;
}

console.log(fib((10)));

function quad(a, b, c) {
    if (a === 0) {
        return "No Zero for a!"
    } else {
        var top1 = -b + (Math.sqrt(Math.pow(b, 2) - (4 * a * c))); 
        var top2 = -b - (Math.sqrt(Math.pow(b,2) - (4 * a * c)));
        var div = 2 * a;
        var y = top1 / div;
        var x = top2 / div;
        if( isNaN(x) || isNaN(y) ) {
            return "Imaginary Number!"
        } else {
            return x + "," + y;
        }
    }
}
 console.log(quad(1, -2, -3));
 console.log(quad(1, -6, 9));
 console.log(quad(1, -3, 4));
 

function mostOften(string) {
    string = string.toLowerCase();
    string = string.split("").sort();
    string = string.join("");
    console.log(string);
    var max = 0;
    var final = [];
    for (var i = 0; i < string.length; i++) {
        char = string.charAt(i);
        var num = (string.lastIndexOf(char)+1) - (string.indexOf(char))
        if(num > max) {
            max = num;
            final  = [string.charAt(i), max]
        } else if (num === max) {
            final.push([string.charAt(i), max])
        }
        i = string.lastIndexOf(char);
    }
    return final;
}

console.log(mostOften("Hello, user")); // -> 'l'
console.log(mostOften("abababcdcdddd")); // -> 'd'