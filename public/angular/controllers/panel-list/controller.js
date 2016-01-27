myApp.controller('panelListController', function($scope, $http, $route, $routeParams) {

    //DRINK
    $http.get('/api/drink').success(function(data, status) {
        $scope.drinks = data;
    });

    //FOOD
    $http.get('/api/meal').success(function(data, status) {
        $scope.foods = data;
    });

    $scope.foodDel = function(id, nombre) {

        var txt;
        var r = confirm("BORRAR " + nombre + "?");
        if (r == true) {
            //FOOD
            $http.delete('/api/meal/' + id).success(function(data, status) {
                //FOOD
                $http.get('/api/meal').success(function(data, status) {
                    $scope.foods = data;
                });
            });
        } else {

        }

    };

    $scope.drinkDel = function(id, nombre) {
        var txt;
        var r = confirm("BORRAR " + nombre + "?");
        if (r == true) {
            //DRINK
            $http.delete('/api/drink/' + id).success(function(data, status) {
                //DRINK
                $http.get('/api/drink').success(function(data, status) {
                    $scope.drinks = data;
                });

            });

        } else {

        }
    };


});