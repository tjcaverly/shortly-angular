angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
  	Links.get()
  		.success(function(data){
  			$scope.data.links = data
  		})
  }

  $scope.getLinks();

});
