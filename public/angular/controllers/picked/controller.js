myApp.controller('pickedController', function($scope, $http, $route, $routeParams) {

    angular.element(document).ready(function() {
        $http.get("/api/drink/" + $routeParams.drinkid).success(function(response) {
            $scope.drink = response;
            console.log(response);
        });

        $http.get("/api/meal/" + $routeParams.foodid).success(function(response) {
            $scope.food = response;
            console.log(response);
        });
    });
});