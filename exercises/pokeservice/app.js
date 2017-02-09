angular.module('pokeApp', [])

.controller('pokeController', ['$scope', 'pokeService', function($scope, pokeService){
    $scope.addPoke = function(pokemon) {
        if($scope.pokemon != undefined){
            $scope.favpokemons = pokeService.addPoke(pokemon)
        }
        delete $scope.pokemon;
    }
    
    $scope.removePoke = function(pokemon) {
        if($scope.pokemon != undefined) {
            $scope.favpokemons = pokeService.removePoke(pokemon)
        }
    }
}])