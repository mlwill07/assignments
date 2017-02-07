var app = angular.module("hitList", []);

app.controller('myController', ['$scope', '$http', function($scope, $http){
    
    var myRequest = $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function(response) {
        console.log(response.data);
        $scope.hitlist = response.data;
    }, function(response) {
        console.log(response)
    })
    
}]);