var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
    
   var myRequest =  $http.get('http://swapi.co/api/films/1')
    .then(function(response){
        console.log(response.data);
        $scope.crawl = response.data.opening_crawl;

        
    }, function(response) {
        console.log(response);
    })
    
}]);

