'use strict';

/**
 * @ngdoc function
 * @name spawnApp.controller:AboutCtrl
 * @description
 * # aquaticsResourceSvc
 * Service to get, put, post updates to db for aquatics of the spawnApp
 */
module.exports = function (ngModule) {
  ngModule.factory('aquaticsResourceSvc', ['$http', function ($http) {
    
    var apiAddy = 'http://gss-0as1s:3000/api/aquatics'; 
  	function getAllAquatics(newAddy) {
  		//input is optional url, returns $http promise
  		if(newAddy){
  			apiAddy = newAddy;
  		}

  		return $http.get(apiAddy);
  	}

    function saveAquatic(aquatic, newAddy) {
      if(newAddy){
        apiAddy = newAddy;
      }      

      var req = {
        method: 'PUT',
        url: apiAddy,
        data: aquatic
      };

      //if aquatic has an id, update with id in url instead of creating new
      if (aquatic.id) {
        req.url = req.url + '/' + aquatic.id;
      }

      return $http(req);//send req, return promise
    }

    function addNew (aquatic_list) {
      if(!aquatic_list[0]){
        return;
      }
      var newAquatic = angular.copy(aquatic_list[0]);
      for (var property in newAquatic) {
          if (newAquatic.hasOwnProperty(property)) {
              // do stuff
              newAquatic[property] = undefined; //clear old values
          }
      }
      delete newAquatic.id;//remove the id
      aquatic_list.unshift(newAquatic);
      return aquatic_list;
    }

  	return {
  		getAll: getAllAquatics,
      save: saveAquatic,
      add: addNew
  	};

//////
  }]);
};