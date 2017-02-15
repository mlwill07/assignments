//Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

function zipZap(str) {
    return str.replace(/(z.p)/ig, 'zp');
    
}

console.log(zipZap("zipXzap")) // → "zpXzp"
console.log(zipZap("zopzop")) // → "zpzp"
console.log(zipZap("zzzopzop")) // → "zzzpzp"