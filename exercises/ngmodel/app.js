var app = angular.module('MyApp', []);

app.controller('mainController', function($scope){
    $scope.name = 'Anna';
    $scope.favoriteColor = 'Blue';
    $scope.from = 'Missoula';
})