angular.module('routingApp') 

.service('httpService', ['$http', function($http){
    
    var key = "api_key=1898375178fa91af67290e97f2fd9470"
    
    this.genres = []
    this.getMovie = function(){
       return $http.get('https://api.themoviedb.org/3/genre/movie/list?'+ key + '&language=en-US')
        .then(function(response){
           this.genres = response.data;
           console.log(this.genres);
           return this.genres;
       })
    }
    
}])