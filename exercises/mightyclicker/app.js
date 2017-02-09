angular.module('clickApp', [])

.controller('clickController', ['$scope', 'blueService', 'redService', function ($scope, blueService, redService) {

    $scope.blueCount = blueService.blueCount;
    $scope.redCount = redService.redCount;

    $scope.blueButton = function () {
        if (blueService.blueCount > 0 && redService.redCount > 0) {
            $scope.blueCount = blueService.incremenet();
            $scope.redCount = redService.decrement();
        } 
        if(redService.redCount === 0) {
            $scope.redCount = redService.reset();
            $scope.blueCount = blueService.reset();
        }
        
    }
    
    $scope.redButton = function() {
        if (blueService.blueCount > 0 && redService.redCount > 0) {
            $scope.blueCount = blueService.decrement();
            $scope.redCount = redService.incremenet();
        }
        if(blueService.blueCount === 0) {
            $scope.redCount = redService.reset();
            $scope.blueCount = blueService.reset();
        }
    }

}])