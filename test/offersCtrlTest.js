describe('Testing offersController', function(){
	beforeEach(module('app'));
	var $controller;

  	beforeEach(inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
    }));

	it('call customerLocationService', function(){
		var $injector = angular.injector([ 'skyTest' ]);
		var offersController = $injector.get('offersCtrl');
		expect(offersController.addToCart()).toEqual(1);
	})
});