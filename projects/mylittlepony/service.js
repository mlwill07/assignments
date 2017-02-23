angular.module('myApp')

.service('ponyService', ['$http', function($http){
    
    this.ponies = [];
    
    this.getPonies = function(){
        return $http.get('http://api.vschool.io/miriamwilliams/pony').then(function(response){
            this.ponies = response.data;
            return this.ponies;
        })
    }
    
    this.addPony = function(pony) {
        return $http.post('http://api.vschool.io/miriamwilliams/pony', pony)
    }
    
    this.deletePony = function(pony){
        var ponyId = pony._id;
        return $http.delete('http://api.vschool.io/miriamwilliams/pony/' + ponyId)
    }
    
    this.editPony = function(pony){
        var ponyId = pony._id;
        return $http.put('http://api.vschool.io/miriamwilliams/pony/' + ponyId, pony)
    }
    
}])