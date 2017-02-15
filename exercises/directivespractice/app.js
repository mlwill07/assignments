angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/wishone', {
              templateUrl: 'components/wishone/wishone.html',
              controller: 'wishOneController'
              })
        .when('/wishtwo', {
              templateUrl: 'components/wishtwo/wishtwo.html',
              controller: 'wishTwoController'
              })
        .otherwise({
        redirectTo: '/wishone'
    })
}])
