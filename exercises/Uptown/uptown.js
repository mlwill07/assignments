var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function uptown(lyrics) {
    var string = "";
    for(var i = 0; i < lyrics.length; i++) {
        string += lyrics[i] + " ";
    }
    console.log(string);
}

uptown(lyrics);

console.log(" ");

function uptownBack(lyrics) {
    var string = "";
    for(var i = lyrics.length-1; i >= 0; i--) {
        string += lyrics[i] + " ";
    }
    console.log(string);
}

uptownBack(lyrics);

console.log(' ');

function uptownOther(lyrics) {
    var string = "";
    for(var i = 0; i < lyrics.length; i += 2) {
        string += lyrics[i] + " ";
    }
    console.log(string);
}

uptownOther(lyrics);

console.log(" ");

function uptownReverseOther(lyrics) {
    var string = "";
    for(var i = 1; i <= lyrics.length; i += 2) {
        if (i < lyrics.length) {
            string += lyrics[i] + " ";
            string += lyrics[i-1] + " ";
            if (lyrics.length % 2 === 0) {
                continue;
            }
        } else if (i === lyrics.length) {
            string += lyrics[i-1];
        }
    }
    console.log(string);
}

uptownReverseOther(lyrics);
console.log(" ");


///join and reverse method///


//function join(lyrics) {
//    console.log(lyrics.join(" "));
//}
//
//join(lyrics);
//console.log(" ");
//
//function reverseJoin(lyrics) {
//    lyrics = lyrics.reverse();
//    console.log(lyrics.join(" "));
//}
//
//reverseJoin(lyrics);