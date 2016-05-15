(function(){
	'use strict';
	angular.module('skyTest').controller('checkoutCtrl', function($scope, $state, orderService){
		$scope.model = $scope.model || {};

		$scope.model.checkoutOrder = function(){
			var cid = $state.params.cid;

			orderService.submitOrder(cid, $scope.model.cart).then(function(response){
				$scope.successOrder = true;
			}, function(response){
				$scope.error = response.error;
			});
		}

		$scope.model.backToCatalogue = function(){
			$state.go('catalogueOffers', {
				cid : $state.params.cid
			})
		}

		function init(){
			if(!$state.params.products || $state.params.products.length === 0){
				$state.go('catalogueOffers',{
					cid : $state.params.cid
				});
			}
			$scope.model.cart = $state.params.products;
		}
		init();
	});
}());