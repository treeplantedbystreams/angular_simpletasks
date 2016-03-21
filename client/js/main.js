//Use to instantiate app, connect factory & controllers and configure app.
 var app = angular.module('myblogApp', ['ngRoute']);
 app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/', 
        templateUrl: 'views/home.html',
        controller: 'MainController'
    });
}]);