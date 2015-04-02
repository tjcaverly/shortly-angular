angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	$scope.link = {};
  $scope.addLink = function() {
  	Links.addLink($scope.link)
  		// .success(function(data){
  		// 	console.log( data );
  		// 	// $scope.link = data.newLink;
  		// })
  }
});
