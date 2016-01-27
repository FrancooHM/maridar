myApp.controller('drinkFoodController', function($scope, $http, $route, $routeParams) {

    angular.element(document).ready(function() {
        $http.get("/api/drink/" + $routeParams.id).success(function(response) {
            $scope.mybeer = response;
        });

        $http.get("/api/get-parity/drink/" + $routeParams.id).success(function(response) {
            $scope.db = response;
        });

    });

});