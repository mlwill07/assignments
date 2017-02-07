angular.module('routingApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'homeController'
        })
        .when('/love', {
            templateUrl: 'components/love/love.html',
            controller: 'loveController'
        })
        .when('/about', {
            templateUrl: 'components/about/about.html',
            controller: 'aboutController'
        })
        .otherwise({
            redirectTo: "/home"
        })
}])