angular.module('myApp')

.controller('wishOneController', ['$scope', function($scope){
    
    $scope.wishListOne = [
        {
        name: "tech thing",
        description: "Some random tech thing",
        wishUrl: "https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg"
        }
    ];
    
    $scope.getWish = function(wish) {
        $scope.wishListOne.push(wish);
        console.log($scope.wishListOne)
    }
    
}])