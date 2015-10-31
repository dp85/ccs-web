(function() {
    
    var app = angular.module('ccsApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ProjectController',
                templateUrl: 'app/views/projectentry.html'
            })
            .when('/contact', {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/contact.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());