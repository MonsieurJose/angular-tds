module.exports=function($routeProvider) {
    $routeProvider.when('/page1', {
        controller: 'App1Controller',
        templateUrl: '../app/templates/main.html'
    }).when('/page2', {
        controller: 'App2Controller',
        templateUrl: '../app/templates/main.html'
    }).otherwise({
        redirectTo: '/page1'
    });
};