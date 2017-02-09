angular.module('routingApp')

.controller('aboutController', ['$scope', "NameService", function($scope, NameService){
    $scope.username = NameService.username;
}])