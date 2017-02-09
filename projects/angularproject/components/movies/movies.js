angular.module('routingApp')

.controller('movController', ['$scope', 'httpService', function($scope, httpService){
    
    $scope.testMovie = httpService.getMovie()
        .then(function(response){
            $scope.testMovie = response;
            console.log($scope.testMovie)
    });
    
}])

