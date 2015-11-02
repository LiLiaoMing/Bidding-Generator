
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider.

    when('/main', {
        templateUrl:'views/main.html',
        controller: 'MainController'
    }).

    when('/foreword', {
        templateUrl:'views/foreword.html',
        controller: 'ForewordController'
    }).
    when('/description', {
        templateUrl:'views/description.html',
        controller: 'DescriptionController'
    }).
    when('/urls', {
        templateUrl:'views/urls.html',
        controller: 'UrlsController'
    }).
    when('/afterword', {
        templateUrl:'views/afterword.html',
        controller: 'AfterwordController'
    }).
    otherwise ({
        redirectTo: '/main'
    });
});

