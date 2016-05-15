(function(){
	'use strict';
	angular.module('skyTest').controller('errorCtrl', function($scope){
		$scope.model = $scope.model || {};

		function init(){
			$scope.model.ciao = 'Ciao';
		}
		init();
	});
}());