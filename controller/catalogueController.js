(function(){
	'use strict';
	angular.module('skyTest').controller('catalogueCtrl', function($scope, $state){
		$scope.model = $scope.model || {};

		function readCookie(){
			if(typeof(Storage) !== "undefined") {
			    var cid = sessionStorage.getItem('cid');
			    if(!cid){
			    	cid = '12345';
			    	sessionStorage.setItem('cid', cid);
			    }
			    $state.go('catalogueOffers',{
		    		'cid' : cid
		    	});
			} else {
				//TODO
			}
		}

		function init(){
			console.log("INIT CATALOGUE");
			readCookie();
		}
		init();
	});
}());