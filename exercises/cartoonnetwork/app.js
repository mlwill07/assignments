angular.module('myApp', [])

.controller('cartoonController', ['$scope', 'cartoonService', function($scope, cartoonService){
    
    $scope.addCartoon = function(cartoon) {
        $scope.cartoons = cartoonService.addCartoon(cartoon);
        console.log($scope.cartoons);
        $scope.cartoon = {};
    }
    
}])