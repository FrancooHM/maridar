myApp.controller('foodDrinkController', function($scope, $http, $route, $routeParams) {

    angular.element(document).ready(function() {
        $http.get("/api/meal/" + $routeParams.id).success(function(response) {
            $scope.mymeal = response;
        });

        $http.get("/api/get-parity/meal/" + $routeParams.id).success(function(response) {
            $scope.db = response;
        });

    });

});