var app = angular.module('MyApp', []);

app.controller('mainController', function ($scope) {
    $scope.badges = [];
    $scope.addPerson = function(person) {
        if ($scope.newPerson != undefined) {
            $scope.badges.push(person);
            $scope.newPerson = {};
            $scope.myForm.$setUntouched();
        }
        
    }
    $scope.logPersonInfo = function(newPerson) {
        
    }
});
