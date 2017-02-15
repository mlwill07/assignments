angular.module('myApp')

.directive('wishList', [function(){
    
    return {
        templateUrl: "directives/wishone/wish-list.html",
        scope: {
            wish: "="
        },
        restrict: "E",
        link: function (scope, elem, attrs) {
        }
    }
    
}])