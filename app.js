(function(){
	'use strict';
	angular.module('skyTest').controller('basketCtrl', function($scope){
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
			$scope.model.cart = $scope.model.cart || [];
		}
		init();
	});
}());
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
(function(){
	'use strict';
	angular.module('skyTest').controller('recapCtrl', function($scope){
		$scope.model = $scope.model || {};

		function init(){
			
		}
		init();
	});
}());