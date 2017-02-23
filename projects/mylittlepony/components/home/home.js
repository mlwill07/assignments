angular.module('myApp')

.controller('homeController', ["$scope", "ponyService", '$sce', function($scope, ponyService, $sce){
    
    $scope.getPonies = function(){
        ponyService.getPonies().then(function(response){
            $scope.ponies = response;
        })
    }
    
    $scope.getPonies();
    
    $scope.deletePony = function(pony, index){
        ponyService.deletePony(pony).then(function(response){
            $scope.ponies.splice(index, 1);
        })
    }
    
    $scope.editPony = function(pony, index) {
        ponyService.editPony(pony).then(function(response){
            console.log(response);
            $scope.ponies.splice(index, 1, pony)
        })
    }
    
    
   $scope.videoPath = 'https://www.youtube.com/results?search_query=' + 'fluttershy';
                
    $scope.trustedUrl = $sce.trustAsResourceUrl($scope.videoPath);
            
}])