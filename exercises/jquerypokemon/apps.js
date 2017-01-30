$.get('http://pokeapi.co/api/v1/pokedex/1', function(data){
    for (var i = 0; i < data.pokemon.length; i++){
        $('#poke').append(`<h4 class='col-sm-3'><a target="_blank" href="http://www.google.com/search?q=${data.pokemon[i].name}">${data.pokemon[i].name.toUpperCase()}</a><h4>`);
    }
});

//for (var i = 1; i < 15; i++) {
//    $.get(`http://pokeapi.co/api/v2/pokemon/${i}`, function(data){
//    $('.pokeTable').append(`
//    <tr>
//        <td><a target="_blank" href="http://www.google.com/search?q=${data.name}">${data.name.toUpperCase()}</a></td>
//        <td>${data.abilities[0].ability.name}</td>
//        <td>${data.abilities[1].ability.name}</td>
//    `)
//});
//}
