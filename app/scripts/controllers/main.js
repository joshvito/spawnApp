'use strict';

/**
 * @ngdoc function
 * @name spawnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spawnApp
 */
angular.module('spawnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
