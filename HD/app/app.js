/**
 * Created by syachnis on 17-01-30.
 */
var app = angular.module('myApp', ['ngRoute' ,'ngMaterial'  ]);


app.config(function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'src/views/page1/page1.html',
           controller : 'HomeController'
        })
        .when('/page3', {
            templateUrl: 'src/views/page3/page3.html',
            controller : 'page3'
        })
        .when('/', {
            templateUrl: 'src/views/page1/page1.html',
            controller : 'HomeController'
        })
        .otherwise({
            redirectTo: '/page1'
        });
});




