angular.module('myApp')

.controller('homeController', ["$scope", "ponyService", '$sce', "$uibModal", function ($scope, ponyService, $sce, $uibModal) {

    $scope.getPonies = function () {
        ponyService.getPonies().then(function (response) {
            $scope.ponies = response;
        })
    }

    $scope.getPonies();

    $scope.deletePony = function (pony, index) {
        ponyService.deletePony(pony).then(function (response) {
            $scope.ponies.splice(index, 1);
        })
    }

    $scope.editPony = function (pony, index) {
        ponyService.editPony(pony).then(function (response) {
            console.log(response);
            $scope.ponies.splice(index, 1, pony)
        })
    }





    $scope.openModal = function (pony) {
                
        $scope.modalPony = pony;
        
        var ponyName = pony.name.replace(" ", "+");
        
        
        ponyService.getYouTube(ponyName).then(function(response){
            $scope.ponyVid = response.id.videoId;
            $scope.videoPath = "https://www.youtube.com/embed/" + $scope.ponyVid + "?autoplay=1";
            $scope.trustedUrl = $sce.trustAsResourceUrl($scope.videoPath);
            
            var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            scope: $scope,
            size: 'md'
        });
        })
        
        
        
        
        

    }
}])