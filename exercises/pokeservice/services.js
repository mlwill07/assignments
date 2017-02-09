angular.module('pokeApp')

.service('pokeService', [function(){
    var favpokemons = [];
    this.addPoke = function(pokemon) {
        favpokemons.push(pokemon);
        return favpokemons;
    }
    
    this.removePoke = function(pokemon) {
        index = favpokemons.indexOf(pokemon);
        favpokemons.splice(index, 1);
        return favpokemons;
    }
    
}])