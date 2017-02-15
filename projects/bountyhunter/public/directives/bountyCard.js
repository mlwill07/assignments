angular.module('myApp')

.directive('bountyCard', [function () {
    return {
        templateUrl: 'directives/bounty-card.html',
        scope: {
            bounty: "="
        }
    }


}])