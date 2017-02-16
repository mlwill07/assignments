angular.module('myApp', ['ngAnimate','ui.bootstrap'])

.controller('mainController', ['$scope', '$http', 'voteService', function($scope, $http, voteService){
   
    $scope.getIssues = function() {
        voteService.getIssues()
            .then(function(response){
            $scope.issues = response.data
        })
    }
    
    $scope.getIssues();
    
    $scope.addItem = function(item){
        if($scope.item.name != undefined){
        voteService.addItem(item)
            .then(function(response){
            $scope.issues.push(response.data);
            $scope.item = {};
        })
        $scope.additem.$setUntouched();
        }
    }
    
    $scope.setUntouched = function(){
        $scope.additem.$setUntouched();
    }
    
    $scope.addComment = function(newComment, issue){
        var index = $scope.issues.indexOf(issue);
        
        var itemId = $scope.issues[index]._id;
        
        $scope.issues[index].comments.push(newComment);
        delete issue.newComment;
        
        var comments = $scope.issues[index];
        
        voteService.addComment(comments, itemId)
            .then(function(response){
        })   
    }
    
    $scope.voteChange = function(dir, issue){
        var index = $scope.issues.indexOf(issue);
        var voteId = $scope.issues[index]._id;
        if(dir === 'up') {
            $scope.issues[index].vote_count++;

        } else if (dir === 'down') {
            $scope.issues[index].vote_count--;
        }
        
        var vote = $scope.issues[index]
        voteService.voteChange(vote, voteId)
            .then(function(response){
        })  
    }
    
    $scope.deleteIssue = function(issue){
        var index = $scope.issues.indexOf(issue);
        var deleteId = $scope.issues[index]._id;
        voteService.deleteIssue(deleteId)
            .then(function(response){
            $scope.issues.splice(index, 1);
        })
    }
    
    $scope.editItem = function(edit, issue){
        var index = $scope.issues.indexOf(issue);
        var editId = $scope.issues[index]._id;
        voteService.addComment(edit, editId)
            .then(function(response){
            $scope.issues.splice(index, 1, response.data)
        })
    }
    
    $scope.deleteComment = function(comment, issue){
        var outer = $scope.issues.indexOf(issue);
        var inner = $scope.issues[outer].comments.indexOf(comment);
        var editId = $scope.issues[outer]._id;
        $scope.issues[outer].comments.splice(inner, 1);
        var delComment = $scope.issues[outer];
        voteService.addComment(delComment, editId)
            .then(function(response){
            console.log(response.data)
            $scope.issues[outer].comments.splice(inner, 1)
        })
        
    }
    
}])

