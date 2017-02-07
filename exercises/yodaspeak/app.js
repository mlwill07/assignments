var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {



    $scope.makeYoda = function (value) {
        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        $scope.yodaLike = "Loading..."
        var myRequest = $http.get('https://yoda.p.mashape.com/yoda?sentence=' + value, config)
            .then(function (response) {
                $scope.yodaLike = response.data;
                delete $scope.phrase;
            }, function (response) {
                $scope.yodaLike = "An error you have received.";
            })
    }

}])