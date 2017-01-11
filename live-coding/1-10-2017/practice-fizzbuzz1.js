for (var count = 0; count <= 100; count++) {
  
    if(count % 3 ===0 && count % 5 === 0) {
        console.log('fizzbuzz');
    } else if (count % 3 === 0) {
        console.log('fizz');
    } else if (count % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(count);
    };
};

var n = 0;
for (n = 0; n <= 100; n++) {
    var replacer = '';
    if (n % 2 == 0) {
        replacer += 'ohh';
    }
    if (n % 5 == 0) {
        replacer += 'yea';
    }
    console.log(replacer || n);
};

for (var i = 0; i < 8; i++) {
    var hash = "";
        for (var k = 0; k < 8; k++) {
            if ((k + i) % 2 == 0) {
                hash += " ";
            } else { 
                hash += "#";
            }   
        }
    console.log(hash + "\n");
}