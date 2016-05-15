(function(){
	'use strict';
	angular.module('skyTest').controller('basketCtrl', function($scope, $state){
		$scope.model = $scope.model || {};

		$scope.total = function(){
			var total = 0;
			if($scope.model.cart){
				for(var i=$scope.model.cart.length - 1; i>=0; i--){
					total += new Number($scope.model.cart[i].price);
				}
			}
			return total;
		}

		$scope.checkout = function(){
			$scope.model.checkout();
		}

		function init(){
			$scope.model.cart = $scope.model.cart || $state.params.cart || [];
			$scope.cid = $state.params.cid;
		}
		init();
	});
}());