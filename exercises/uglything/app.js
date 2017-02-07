var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
   
    if (localStorage.getItem('uglyStuff') != null) {
        $scope.uglyThings = JSON.parse(localStorage.getItem('uglyStuff'));
    } else {
        $scope.uglyThings = [];
    }
            
    
    $scope.addItem = function(thing) {
        $scope.thing.comments = [],
        console.log($scope.thing);
        $scope.uglyThings.push(thing);
        
        localStorage.setItem('uglyStuff', JSON.stringify($scope.uglyThings));
            
        $scope.uglies = {};
        
    }
    
    $scope.editItem = function(item, index) {
        $scope.uglyThings[index].comments.push(item.newComment);
        delete item.newComment;
        localStorage.setItem('uglyStuff', JSON.stringify($scope.uglyThings));
        
    }
    
    
    $scope.deleteItem = function(item, index) {
        $scope.uglyThings.splice(index, 1);
        localStorage.setItem('uglyStuff', JSON.stringify($scope.uglyThings));
    }
    
    $scope.deleteComment = function(outerIndex, innerIndex) {
        $scope.uglyThings[outerIndex].comments.splice(innerIndex, 1);
        localStorage.setItem('uglyStuff', JSON.stringify($scope.uglyThings));

    }
    
    
}]);