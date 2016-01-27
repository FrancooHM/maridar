myApp.controller('homeDrinkController', function($scope, $http) {

    $http.get("/api/drink").success(function(response) {
        $scope.db = response;
    });
});