mainApp.controller('MainController', function($scope, forewordService, afterwordService, descriptionService, urlService) {
	$scope.foreword = forewordService.getForeword();
	$scope.description = descriptionService.getDescription();
	$scope.urls = urlService.getUrlComment();
	$scope.afterword = afterwordService.getAfterword();

	$scope.copyToClipBoard = function() {
		var copyTextarea = document.querySelector('.js-copytextarea');
  		copyTextarea.select();
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		} catch (err) {
			console.log('Oops, unable to copy');
		}
	}
});

