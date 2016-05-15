(function(){
	'use strict';
	angular.module('skyTest').controller('checkoutCtrl', function($scope, $state, orderService){
		$scope.model = $scope.model || {};

		$scope.model.checkoutOrder = function(){
			var cid = $state.params.cid;
			var orderId = Math.floor(Math.random()*10000);

			orderService.submitOrder(cid, $scope.model.cart).then(function(response){
				$scope.successOrder = true;
			}, function(response){
				$scope.error = response.error;
			});
		}

		function init(){
			console.log("checkout INIT",$state.params.products);
			$scope.model.cart = $state.params.products;
		}
		init();
	});
}());