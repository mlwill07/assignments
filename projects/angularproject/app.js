angular.module('routingApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'homeController'
        })
        .when('/movies', {
            templateUrl: 'components/movies/movies.html',
            controller: 'movController'
        })
        .when('/tv', {
            templateUrl: 'components/tv/tv.html',
            controller: 'tvController'
        })
        .otherwise({
            redirectTo: '/home'
        })
    
}])