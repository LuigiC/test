(function(){
	'use strict';
	angular.module('skyTest').service('customerLocationService', function($http){
		
		this.getLocation = function(cid){
			return $http({
				method : 'GET',
				url	   : '/catalogue/' + cid
			})
		}
	});
}())