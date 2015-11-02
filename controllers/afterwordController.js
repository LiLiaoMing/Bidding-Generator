mainApp.controller('AfterwordController', function($scope, afterwordService, dbService) {
	$scope.endings = dbService.endings;
    $scope.myNames = dbService.myNames;
    
    $scope.ending = afterwordService.getEnding();
    $scope.myName = afterwordService.getMyName();
    $scope.afterword = afterwordService.getAfterword();

    $scope.remake = function(){
        afterwordService.setEnding($scope.ending);
        afterwordService.setMyName($scope.myName);
        
        $scope.afterword = afterwordService.getAfterword();
    }
});
