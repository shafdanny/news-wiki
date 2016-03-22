'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:WikipediaCtrl
 * @description
 * # WikipediaCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('WikipediaCtrl', ['$scope', 'wikiApi', function ($scope, wikiApi) {
  	var logdata = function (data){
  		console.log(data);
  		$scope.wikipediaArticle = data;
  	}

  	$scope.searchWiki = function() {
  		console.log($scope.searchTerm);
  		wikiApi.getWiki($scope.searchTerm, logdata);
  	}

  }]);
