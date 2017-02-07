function formatMoney(input) {
    return `$${(input/100).toLocaleString(undefined, {minimumFractionDigits: 2})}`
}


console.log(formatMoney(123456789));  // returns $1,234,567.89  
console.log(formatMoney(1456789));  // returns $1,234,567.89  
console.log(formatMoney(43255456789));  // returns $1,234,567.89  
console.log(formatMoney(530));  // returns $1,234,567.89  
console.log(formatMoney(30));  // returns $1,234,567.89  
console.log(formatMoney(1865742960));  // returns $1,234,567.89  