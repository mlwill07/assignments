var app = angular.module('MyApp', []);

app.controller('myController', function($scope){
    $scope.person = {
        firstName: 'Anna',
        lastName: 'Smith'
    }
})