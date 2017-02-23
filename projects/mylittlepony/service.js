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
    
    
    this.getYouTube = function(pony) {
        var friend = "my+little+pony+friendship+is+magic+" + pony;
        return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + friend + "&type=video&videoDefinition=high&key=AIzaSyAJwYZSbsQSlVHT_6rxE3-weiY6nyCG7tA")
            .then(function(response){
            return response.data.items[0];
        })
    }
}])