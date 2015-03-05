'use strict';

/**
 * @ngdoc overview
 * @name spawnApp
 * @description
 * # spawnApp
 *
 * Main module of the application.
 */

// Main app definition
angular.module('spawnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'aquaticsResourceCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


// include all the necessary js files ( controllers, services, directors, filters... etc )
//
//require('services/aquaticsResource.svc')(mod);
//require('controllers/aquaticsResource.ctrl')(mod);