angular.module('myApp', ['ngRoute', 'ui.bootstrap'])

.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
        .when('/home', {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .when('/add', {
            templateUrl: "components/add/add.html",
            controller: "addController"
        })
        .otherwise({
            redirectTo: '/home'
        })
    
}])