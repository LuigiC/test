(function(){
	'use strict'
	angular.module('skyTest',['ui.router']).config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/skyTest');

		$stateProvider.state('catalogue', {
			url : '/skyTest',
			params : {
				cid : null
			},
			views : {
				"main" : {
					templateUrl : "template/catalogueFallback.html",
					controller  : "catalogueCtrl"
				}
			}
		}).state('catalogueOffers', {
			url : '/catalogue/{cid:[0-9]{5}}',
			params : {
				cid : null
			},
			views : {
				"main" : {
					templateUrl : "template/catalogue.html",
					controller  : "catalogueOffersCtrl"
				},
				"header@catalogueOffers" : {
					templateUrl : "template/header.html"
				},
				"footer@catalogueOffers" : {
					templateUrl : "template/footer.html"
				},
				"basket@catalogueOffers" : {
					templateUrl : "template/basket.html",
					controller  : "basketCtrl"
				},
				"offers@catalogueOffers" : {
					templateUrl : "template/offers.html",
					controller  : "offersCtrl"
				}
			}
		}).state('checkout',{
			url : '/checkout/{cid:[0-9]{5}}',
			params : {
				cid : null,
				products : null
			},
			views : {
				"main" : {
					templateUrl : "template/checkout.html",
					controller  : "checkoutCtrl"
				},
				"header@checkout" : {
					templateUrl : "template/header.html"
				},
				"footer@checkout" : {
					templateUrl : "template/footer.html"
				},
				"recap@checkout" : {
					templateUrl : "template/recap.html",
					controller  : "basketCtrl"
				}
			}
		}).state('error', {
			url : 'error',
			params : {
				error : null
			},
			views : {
				"main" : {
					templateUrl : "template/error.html",
					controller  : "errorCtrl"
				}
			}
		});
	})
}())