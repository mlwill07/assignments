//Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

function delDel(string) {
    if(string.indexOf('del') === 1) {
        string = string.replace('del','');
        return string;
    } else {
        return string;
    }
}

console.log(delDel("adelbc")); // → "abc"
console.log(delDel("adelHello")); // → "aHello"
console.log(delDel("adedbc")); // → "adedbc"
console.log(delDel("abdeldbc")); // → "abdeldbc"