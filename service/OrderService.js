(function(){
	'use strict';
	angular.module('skyTest').service('orderService', function($http){
		
		this.submitOrder = function(cid, orderId, cart){
			return $http({
				method : 'POST',
				url	   : '/order/' + cid +'/' + orderId,
				data   : cart,
				contentType : "application/json; charset=utf-8",
				dataType    : "json"
			})
		}
	});
}())