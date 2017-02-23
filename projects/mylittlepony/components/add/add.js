angular.module('myApp')

.controller('addController', ['$scope', 'ponyService', '$location', function($scope, ponyService, $location){
    
    $scope.addPony = function(pony){
        ponyService.addPony(pony).then(function(response){
            $location.path('/home');
        })
        
    }
    
}])