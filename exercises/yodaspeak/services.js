angular.module('myApp')

.service('httpService', ['$http', function($http){
    
    this.yodaGo = function(value) {
        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
       return $http.get('https://yoda.p.mashape.com/yoda?sentence=' + value, config) 
    }
    
}])