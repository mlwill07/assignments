angular.module('myApp')

.controller('wishTwoController', ['$scope', function($scope){
    
    $scope.wishTwoList = [
        {
            name: "Interlocken",
            description: "Swiss Alps",
            wishUrl: "http://www.thomsonlakes.co.uk/dbimages/asset/Large/v01/095/822.jpg"
        }
    ]
    
    $scope.getWish = function(wish) {
        $scope.wishListOne.push(wish);
        console.log($scope.wishListOne)
    }
    
}])