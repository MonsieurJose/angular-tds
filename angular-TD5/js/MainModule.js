
angular.module("MainModule").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/route1', {
            templateUrl: 'templates/about.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl1'
        }).
        when('/route2', {
            templateUrl: 'templates/login.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl2'
        }).
        when('/route3', {
            templateUrl: 'templates/in/exit.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl3'
        }).
        when('/route4', {
            templateUrl: 'templates/in/list.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl4'
        });
    }]);