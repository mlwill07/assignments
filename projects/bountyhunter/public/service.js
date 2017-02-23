angular.module('myApp')

.service('bountyService', ['$http', function($http){
    
    this.getBounties = function(){
       return $http.get('http://localhost:8000/bounty')
    }
    
    this.addBounty = function(bounty) {
        return $http.post('http://localhost:8000/bounty', bounty)
    }
    
    this.deleteBounty = function(person) {
        return $http.delete('http://localhost:8000/bounty/' + person._id)
    }
    
    this.editPerson = function(item){
        return $http.put('http://localhost:8000/bounty/' + item._id, item)
        .then(function(response){
              response = response.data;
              return response
          })
    }
}])