mainApp.controller('UrlsController', function($scope, urlService, dbService) {

	$scope.titles = dbService.titles;
	$scope.filter;
	$scope.filters = urlService.getFilters();

	$scope.originUrls = dbService.urls;
	$scope.urls;
	$scope.urlItemShows = urlService.getUrlItemShows();

	$scope.selectedUrls = urlService.getUrls();
	$scope.title = urlService.getTitle();

	$scope.urlComment = urlService.getUrlComment();

	$scope.isChecked = [];

	$scope.selectedUrls.forEach(function(item)
	{
		$scope.isChecked[item.index] = true;			
	});

	$scope.setUrl = function(_index) {
		if ($scope.isChecked[_index])
		{
			newUrl = $scope.originUrls[_index];
			$scope.selectedUrls.push(newUrl);
			$scope.urlComment = urlService.getUrlComment();
		}
		else
		{
			var ii = 0;
			$scope.selectedUrls.forEach(function(item){
				if (item.index == _index)
				{
					$scope.selectedUrls.splice(ii, 1);
					$scope.urlComment = urlService.getUrlComment();
					return;			
				}
				ii++;
			});
		}
	};
	
	$scope.setUrlItemShows = function(key) {
		
		$scope.urlItemShows[key] = !$scope.urlItemShows[key];
		urlService.setUrlItemShows($scope.urlItemShows);
		$scope.urlComment = urlService.getUrlComment();
	};

	$scope.setTitle = function() {
		urlService.setTitle($scope.title);
		$scope.urlComment = urlService.getUrlComment();
	}

	$scope.removeFilter = function(_index) {
		$scope.filters.splice(_index, 1);
		for(i=_index;i<$scope.filters.length;i++)
			$scope.filters[i].index -= 1;
		urlService.setFilters($scope.filters);
		$scope.refreshUrls();
	}
	$scope.addFilter = function(keyEvent) {
		if (keyEvent.which == 13)
		{
			var newFilter = {
				index : $scope.filters.length,
				value : $scope.filter
			}
			$scope.filters.push(newFilter);
			$scope.filter = "";

			urlService.setFilters($scope.filters);
			$scope.refreshUrls();
		}
	}

	$scope.refreshUrls = function() {
		$scope.urls = [];
		$scope.originUrls.forEach(function(item){
			flag = true;
			$scope.filters.forEach(function(filter){
				
				if(item.keyword.toLowerCase().indexOf(filter.value.toLowerCase()) < 0)
					flag = false;
			});
			if (flag == true)
			{
				$scope.urls.push(item);
			}
		});
	}

	$scope.refreshUrls();
});