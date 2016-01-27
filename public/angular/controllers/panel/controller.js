myApp.controller('panelController', function($scope, $http, $route, $routeParams) {

    $scope.httptags = [];

    $scope.availableOptions = [{
        id: 0,
        option: "COMIDA"
    }, {
        id: 1,
        option: "BEBIDA"
    }];

    var addTag = function(tag) {

        $scope.httptags.push(tag);

    };

    var delTag = function(tag) {

        for (var i = $scope.httptags.length - 1; i >= 0; i--) {
            if ($scope.httptags[i] == tag) {
                $scope.httptags.splice(i, 1);
            }
        };

    };

    $scope.buttonClick = function() {

        console.log($scope.tags);

        console.log($scope.selection);
        var httpdata = {
            titulo: $scope.titulo,
            descripcion: $scope.descripcion,
            productor: $scope.productor,
            idproductor: $scope.idproductor,
            tags: $scope.httptags,
            image: $scope.image
        };


        if ($scope.selection == 1) {
            //DRINK
            $http.post('/api/drink', httpdata).success(function(data, status) {
            });

        } else {
            //FOOD
            $http.post('/api/meal', httpdata).success(function(data, status) {
            });
        }

    };

    $scope.change = function() {
        console.log($scope.selection == 1);
        if ($scope.selection == 1) {
            //DRINK
            $http.get('/api/get-drink-tags').success(function(data, status) {
                $scope.tags = data;
            });

        } else {
            //FOOD
            $http.get('/api/get-meal-tags').success(function(data, status) {
                $scope.tags = data;
            });
        }

    };

    $scope.clickTag = function(tag, selected) {

        if (selected) {
            addTag(tag);
        } else {
            delTag(tag);
        }

    };

});