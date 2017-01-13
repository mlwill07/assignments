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
    string = string.substring(0, string.length -1);
    string += ".";
    console.log(string);
}

uptown(lyrics);

console.log(" ");

function uptownBack(lyrics) {
    var string = "";
    for(var i = lyrics.length-1; i >= 0; i--) {
        string += lyrics[i] + " ";
    }
    string = string.substring(0, string.length -1);
    string += ".";
    console.log(string);
}

uptownBack(lyrics);

console.log(' ');

function uptownOther(lyrics) {
    var string = "";
    for(var i = 0; i < lyrics.length; i += 2) {
        string += lyrics[i] + " ";
    }
    string = string.slice(0, -1);
    string += ".";
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
    string = string.slice(0, 1);
    string += ".";
    console.log(string);
}

uptownReverseOther(lyrics);
console.log(" ");

//function flipLyrics(lyrics) {
//    var string = "";
//    for (var i = 0, j = 1; j <= lyrics.length; i += 2, j += 2) {
//        if (i <= lyrics.length) {
//        string += lyrics[j] + " " + lyrics[i] + " ";
//        } else if (j === lyrics.length) {
//            string += lyrics[i];
//        }
//    }
//    console.log(string);
//}
//
//flipLyrics(lyrics);
///join and reverse method///


//function join(lyrics) {
//    console.log(lyrics.join(" "));
//}
//
//join(lyrics);
//console.log(" ");
//
//function reverseJoin(lyrics) {
//    console.log(lyrics.reverse().join(" "));
//}
//
//reverseJoin(lyrics);