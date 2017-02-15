var readline = require('readline-sync');
var calculate = require('./module');

function calculator() {
    var num1 = parseInt(readline.question('What is the first number?\n'));
    var num2 = parseInt(readline.question('what is the second number?\n'));
    var opp = readline.question('what operation do you want to perform?\n[+] Addition\n[-] subtration\n[*] Multiplication\n[/] division\n[^] exponentionatio\n');
    var output = 0;
    switch (opp) {
        case '+':
            output = calculate.add(num1, num2);
            break; 
        case '-':
            output = calculate.sub(num1, num2);
            break; 
        case '*':
            output = calculate.mult(num1, num2);
            break; 
        case '/':
            output = calculate.div(num1, num2);
            break; 
        case '^':
            output = calculate.expo(num1, num2);
            break; 
    }
    
    console.log(`You're result is: ${output}`);
}

calculator();