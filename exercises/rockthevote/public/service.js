angular.module('myApp')

.service('voteService', ['$http', function($http){
    
    this.getIssues = function(){
        return $http.get('http://localhost:8000/issues')
    }
    
    this.addItem = function(item) {
        item.comments = [];
        item.vote_count = 0;
        return $http.post('http://localhost:8000/issues', item)
    }
    
    this.addComment = function(comment, itemId) {
        return $http.put('http://localhost:8000/issues/' + itemId, comment)
    }
    
    this.voteChange = function(vote, itemId) {
        return $http.put('http://localhost:8000/issues/' + itemId, vote)
    }
    
    this.deleteIssue = function(itemId) {
        return $http.delete('http://localhost:8000/issues/' + itemId)
    }
    
    
}])