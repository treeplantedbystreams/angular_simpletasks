//Use to instantiate app, connect factory & controllers and configure app.
 angular.module('myblogApp', [ 'ngRoute', ]);
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'Home'
    })
    .otherwise({
        redirectTo: '/', 
        templateUrl: 'viewhome.html',
        controller: 'MainController'
    });
}]);