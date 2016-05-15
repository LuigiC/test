(function(){
	'use strict';
	angular.module('skyTest').service('catalogueService', function($http){
		
		this.getCatalogue = function(cid, lid){
			return $http({
				method : 'GET',
				url	   : '/catalogue/' + cid + '/' + lid
			})
		}
	});
}())