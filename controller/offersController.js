(function(){
	'use strict';
	angular.module('skyTest').controller('offersCtrl', function($scope, $state, customerLocationService, catalogueService){
		$scope.model = $scope.model || {};

		$scope.addToCart = function(item){
			$scope.model.addToCart(item);
		}

		function getCatalogue(cid, lid){
			catalogueService.getCatalogue(cid, lid).then(function(response){
				$scope.catalogue = response.data;
			}, function(response){
				console.log('error getCatalogue');
			});
		}

		function init(){
			customerLocationService.getLocation($state.params.cid).then(function(response){
				var lid = response.data.lid;
				getCatalogue($state.params.cid, lid);
			},function(response){
				$scope.error = response.data.error;
				console.log('request errata');
			});
		}
		init();
	});
}());