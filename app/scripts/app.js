'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name spawnApp
 * @description
 * # spawnApp
 *
 * Main module of the application.
 */
/*var app = angular.module('spawnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]);
// Main app definition
app.config(function ($routeProvider) {
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
});*/

// Main app definition

var mod = angular.module('spawnApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
]);
 

angular.module('app')
  .config(['$routeProvider', function ($routeProvider) {

    // Redirects and Otherwise //
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

}]);

// include all the necessary js files ( controllers, services, directors, filters... etc )
//
require('./controllers/index.js')(mod);
require('./services/index.js')(mod);