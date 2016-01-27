////////////////////////////////////
////// ANGULAR APP INIT
////////////////////////////////////

myApp = angular.module('myApp', ['ngRoute']);

////////////////////////////////////
////// ANGULAR ROUTE PROVIDER
////////////////////////////////////

myApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.when('/index', {
        controller: "indexController"
    });

    $routeProvider.when('/', {
        controller: "indexController"
    });

    $routeProvider.when('/panel', {
        controller: "panelController"
    });

    $routeProvider.when('/panel-list', {
        controller: "panelListController"
    });

    $routeProvider.when('/index-drink', {
        controller: "homeDrinkController"
    });

    $routeProvider.when('/drink-food/:id', {
        controller: "drinkFoodController"
    });

    $routeProvider.when('/index-food', {
        controller: "homeFoodController"
    });

    $routeProvider.when('/food-drink/:id', {
        controller: "foodDrinkController"
    });

    $routeProvider.when('/picked/:foodid/:drinkid', {
        controller: "pickedController"
    });

    console.log("Route Providing");

});

////////////////////////////////////
////// MATERIALIZE PARALLAX INIT
////////////////////////////////////

$(document).ready(function() {
    $('.parallax').parallax();
});