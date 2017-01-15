//The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

function makeTags(string1, string2) {
    var string = "<" + string1 + ">" + string2 + "</" + string1 + ">";
    return string;
}

console.log(makeTags("i", "Yay")); // → "<i>Yay</i>"
console.log(makeTags("i", "Hello")); // → "<i>Hello</i>"
console.log(makeTags("cite", "Yay")); // → "<cite>Yay</cite>"