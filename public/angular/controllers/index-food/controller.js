myApp.controller('homeFoodController', function($scope, $http) {

    $http.get("/api/meal").success(function(response) {
        $scope.db = response;
    });
});