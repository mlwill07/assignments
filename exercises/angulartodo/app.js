var app = angular.module('todoList', []);

app.controller('mainController', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {

    httpService.todoRequest()
        .then(function (response) {
            $scope.todoList = response;
        })

    $scope.addTask = function (task) {
        if ($scope.task != undefined) {
            httpService.addTask(task)
                .then(function (todoList) {
                    $scope.todoList = todoList;
                })
            $scope.task = {};
        }
        $scope.todoForm.$setUntouched();
    }

    $scope.deleteItem = function (item, index) {
        httpService.deleteItem(item._id);
        $scope.todoList.splice(index, 1);

    }

    $scope.isCompleted = function (item, index) {
        httpService.isCompleted(item)
            .then(function (response) {
                $scope.todoList.splice(index, 1, response);
            })
    }

    $scope.editItem = {};

    $scope.edit = function (item, index) {
        $scope.editItem = $scope.todoList[index];
        $scope.editIndex = index;
    }

    $scope.editTask = function (item) {
            httpService.editTask(item)
                .then(function (response) {
                    $scope.todoList.splice($scope.editIndex, 1, response);
                })
        }
        //    var myRequest = $http.get('http://api.vschool.io/miriamwilliams/todo') 
        //        .then(function(response){
        //            $scope.todoList = response.data;
        //        }, function(response){
        //            console.log(response)
        //        });



    //    $scope.addTask = function(task) {
    //        if ($scope.task != undefined) {
    //            console.log($scope.task);
    //            $http.post('http://api.vschool.io/miriamwilliams/todo/', $scope.task)
    //                .then( function(response) {
    //                    console.log(response.data);
    //                    $scope.todoList.push(response.data);
    //                    console.log('Success!')
    //                }, function(){
    //                    console.log('Failure!')
    //                })
    //            $scope.task = {};
    //            
    //        }
    //        $scope.todoForm.$setUntouched();
    //    }



    //    $scope.deleteItem = function (item, index) {
    //        //        $scope.tobedeleted = item._id;
    //        $http.delete('http://api.vschool.io/miriamwilliams/todo/' + item._id)
    //            .then(function () {
    //                console.log('success!?')
    //            })
    //        $scope.todoList.splice(index, 1);
    //
    //    }



    //    $scope.isCompleted = function (item, index) {
    //        //        $scope.itemId = item._id;
    //        //        $scope.itemIndex = $scope.todoList.indexOf($scope.item)
    //        $http.put('http://api.vschool.io/miriamwilliams/todo/' + item._id, item)
    //            .then(function (response) {
    //                $scope.todoList.splice(index, 1, response.data);
    //            })
    //
    //    }



    //    $scope.editTask = function (item) {
    //        $http.put('http://api.vschool.io/miriamwilliams/todo/' + $scope.editItem._id, item)
    //            .then(function (response) {
    //                $scope.todoList.splice($scope.editIndex, 1, response.data);
    //            })
    //    }

}])