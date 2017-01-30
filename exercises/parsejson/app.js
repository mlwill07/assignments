function parsePokemon() {
 var xhr = new XMLHttpRequest();
    
  xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        for(var i = 0; i < data.objects[0].pokemon.length; i++) {
            document.getElementById('character').innerHTML += `
            <p>${i+1}: ${data.objects[0].pokemon[i].name}</p>` 
        }
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");  
xhr.send();   

}

parsePokemon();