'use strict';

/**
 * @ngdoc function
 * @name spawnApp.controller:AboutCtrl
 * @description
 * # aquaticsResourceCtrl
 * Controller for interacting with aquaticsResources
 */
module.exports = function (ngModule) {
  ngModule.controller('aquaticsResourceCtrl', ['$scope', 'aquaticsResourceSvc', function ($scope, aquaticsResourceSvc) {
	
	$scope.aquaticTypes = ['bap', 'hap'];
	$scope.aquaticClasses = [1,2,3,4,5,6,7,8,9,10,11,12,13];
	$scope.aquaticGroups = ['a', 'b', 'c', 'd'];
	$scope.aquaticVals = [
		{'code':0, 'value':'false'},
		{'code':1, 'value':'true'}
	];

	$scope.getAquaticDetail = function(aquatic) {
		console.log('getAquaticDetail called');
		$scope.aquaticDetails = aquatic;
	};

	aquaticsResourceSvc.getAll()
		.success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
			$scope.allAquaticsList = data;
			$scope.getAquaticDetail($scope.allAquaticsList[0]);
			console.log(status, headers, config);
		})
		.error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
			console.log('alert: error getting allAquaticsList');
			console.log(data, status, headers, config);
		});    

	$scope.saveAquatic = function(aquatic) {
		aquaticsResourceSvc.save(aquatic)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				console.log(data, status, headers, config);
			})
			.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				console.log('alert: error saving aquatic');
				console.log(data, status, headers, config);
			});
	};

	$scope.addAquatic = function() {
		$scope.allAquaticsList = aquaticsResourceSvc.add($scope.allAquaticsList);
		$scope.getAquaticDetail($scope.allAquaticsList[0]);
	};

//////
  }]);
};