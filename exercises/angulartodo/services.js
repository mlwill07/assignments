angular.module('todoList')

.service('httpService', ['$http',function($http){
    
    var todoList = {};
    
     this.todoRequest = function(){
        return $http.get('http://api.vschool.io/miriamwilliams/todo')
            .then(function(response) {
            todoList = response.data;
            return todoList;
        }, function(response){
            console.log('error');
        })
    }
     
     this.addTask = function(task) {
         return $http.post('http://api.vschool.io/miriamwilliams/todo/', task)
             .then( function(response) {
                    todoList.push(response.data);
                    return todoList;
            }, function(response){
             console.log(failure);
         })
     }
     
     this.deleteItem = function (item_id) {
         return $http.delete('http://api.vschool.io/miriamwilliams/todo/' + item_id)
     }
    
     this.isCompleted = function(item) {
         return $http.put('http://api.vschool.io/miriamwilliams/todo/' + item._id, item)
         .then(function(response) {
             response = response.data;
             return response;
         })
     }
     
     this.editTask = function(item) {
          return $http.put('http://api.vschool.io/miriamwilliams/todo/' + item._id, item)
            .then(function(response){
              response = response.data;
              return response
          })
     }
     
     
     
}])