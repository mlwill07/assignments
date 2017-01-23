var form = document.getElementById('user-form');

document.getElementById('submit-button').addEventListener('click', function() {
    var input = form.elements["first-name"].value;
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    var output = '';
    
    for(var i = 0; i < input.length; i++) {
        console.log(vowels.indexOf(input[i]));
        if(vowels.indexOf(input[i]) === -1){
            output += input[i];
        }
    }
    document.getElementById('output').textContent = output;
});

