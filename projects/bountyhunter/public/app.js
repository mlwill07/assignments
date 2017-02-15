angular.module('myApp', [])

.controller('mainController', ['$scope', 'bountyService', function($scope, bountyService){
    $scope.getBounties = function() {
        bountyService.getBounties().then(function(response){
            $scope.bounties = response.data;
            console.log($scope.bounties)
        })
    }
    
    $scope.getBounties();
    
    $scope.submitBounty = function(bounty) {
        bountyService.addBounty(bounty).then(function(response){
            $scope.bounties.push(response.data);
        })
        $scope.newBounty = {};
    }
    
    $scope.deletePerson = function(person, index) {
        
        bountyService.deleteBounty(person).then(function(){
            $scope.bounties.splice(index, 1);
        })
    }
    
    $scope.edit = function(item, index) {
        
         $scope.editItem = $scope.bounties[index];
        $scope.editIndex = index;
    }
    
    $scope.editPerson = function(item) {
        
        bountyService.editPerson(item)
                .then(function (response) {
                    $scope.bounties.splice($scope.editIndex, 1, response);
                })
        
    }
}])