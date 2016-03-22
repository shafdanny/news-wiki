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
    $scope.wikipediaArticle = "Use the search box above to search in Wikipedia";

  	var logdata = function (data){
  		console.log(data);
  		$scope.wikipediaArticle = data;
  	};

  	$scope.searchWiki = function() {
  		console.log($scope.searchTerm);
  		wikiApi.getWiki($scope.searchTerm, logdata);
  	};

    $scope.change = function(){
      console.log("Something is changing !");
    }


  }]);
