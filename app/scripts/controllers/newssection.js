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


  	var topStories = nytApi.getTopStories($scope.section);
  	topStories.then(function(data) {
  		
  		var filteredData = data.results.filter(containImage);
  		console.log(filteredData);
  		$scope.results = filteredData;
  	})

  	function containImage(data) {
  		return (data.multimedia.length>2);
  	}

  }]);
