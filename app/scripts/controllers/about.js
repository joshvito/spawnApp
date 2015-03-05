'use strict';

/**
 * @ngdoc function
 * @name spawnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spawnApp
 */
/*angular.module('spawnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
angular.module('spawnApp').controller('AboutCtrl', ['$scope', 
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);