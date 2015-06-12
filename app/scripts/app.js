'use strict';

/**
 * @ngdoc overview
 * @name masonryGridGeneratorApp
 * @description
 * # masonryGridGeneratorApp
 *
 * Main module of the application.
 */
angular
    .module('masonryGridGeneratorApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/grid', {
                templateUrl: 'views/gridsettings.html',
                controller: 'GridsettingsCtrl'
            })
            .when('/items', {
                templateUrl: 'views/itemsettings.html',
                controller: 'ItemsettingsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
