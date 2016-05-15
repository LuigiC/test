(function(){
	'use strict';
	angular.module('skyTest').controller('catalogueOffersCtrl', function($scope, $state){
		$scope.model = $scope.model || {};

		$scope.model.addToCart = function(item){
			var index = $scope.model.cart.indexOf(item);
			if(index >- 1){
				$scope.model.cart.splice(index, 1);
			}else{
				$scope.model.cart.push(item);
			}
		};

		$scope.model.checkout = function(){
			$state.go('checkout',{
				'cid' : $state.params.cid,
				'products' : $scope.model.cart
			});
		}

		function init(){
			console.log("INIT CATALOGUE OFFERS", $state.params);
		};
		init();
	});
}());