mainApp.controller('ForewordController', function($scope, forewordService, dbService) {
	
	$scope.greatings = dbService.greatings;
	$scope.denoms = dbService.denoms;

	$scope.keyword = forewordService.getKeyword();	
	$scope.greating = forewordService.getGreating();
	$scope.denom = forewordService.getDenom();
	$scope.name = forewordService.getCustomerName();
	$scope.foreword = forewordService.getForeword();

	$scope.remake = function(){
		forewordService.setKeyword($scope.keyword);
		forewordService.setGreating($scope.greating);
		forewordService.setDenom($scope.denom);
		forewordService.setCustomerName($scope.name);
		
		$scope.foreword = forewordService.getForeword();
	}

});
