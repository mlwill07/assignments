var input = 'bookkeeper larry';

function noDuplicates(string) {
    //lowercase letters
    string = string.toLowerCase();
    //create an empty string for unique
    var unique = '';
    var misfits = '';
    //create an empty string for misfits
    for(var i = 0; i < string.length; i++) {
        if(unique.indexOf(string[i]) >= 0){
            misfits += string[i];
        } else {
            unique += string[i];
        }
    }
    //loop through each letter
        //check if it's there
            //if yes, add to duplicates
            //else add to unique
    //console.log uniques and misfits
    console.log(unique);
    console.log(misfits);
}

noDuplicates(input);