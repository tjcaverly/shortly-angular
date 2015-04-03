angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {};
	  	console.log($scope.failed);  $scope.addLink = function() {

  	Links.addLink($scope.link)
  	.success(function(data, status){
  		//$scope.failed = false;
  		$location.path('/links');
  	})
  	.error(function(data, status) {
  		$scope.failed = true;

  	})
  		// .success(function(data){
  		// 	console.log( data );
  		// 	// $scope.link = data.newLink;
  		// })
  }
});
