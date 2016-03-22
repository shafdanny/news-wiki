'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:NewssectionCtrl
 * @description
 * # NewssectionCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('NewssectionCtrl', ['$scope', 'nytApi', function ($scope, nytApi) {

  	$scope.capitalSection = $scope.section.toUpperCase();
  	$scope.count = 0;

  	var topStories = nytApi.getTopStories($scope.section);
  	topStories.then(function(data) {
  		
  		$scope.filteredData = data.results.filter(containImage);
  		//console.log(filteredData);
  		$scope.results = $scope.filteredData.slice($scope.count, $scope.count+5);
  		$scope.maxNbArticle = $scope.filteredData.length;
  	});

  	function containImage(data) {
  		return (data.multimedia.length>2);
  	}

  	$scope.increment = function () {
  		
  		if($scope.count < $scope.maxNbArticle-5) {
  			$scope.count = ($scope.count + 1);
  			$scope.results = $scope.filteredData.slice($scope.count, $scope.count+5);
  		}
  		
  	};

  	$scope.decrement = function () {
  		
  		if($scope.count > 0){
  			$scope.count = ($scope.count - 1);
  			$scope.results = $scope.filteredData.slice($scope.count, $scope.count+5);
  		}
  		
  	};

  }]);
