'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:NewspreviewCtrl
 * @description
 * # NewspreviewCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('NewspreviewCtrl', ['$scope', 'nytApi', '$window', '$rootScope', function ($scope, nytApi, $window, $rootScope) {

  	$scope.articleClick = function() {
      $rootScope.news = $scope.news;
      console.log($rootScope.news);
  		$window.open('#/example', '_blank');
  	}

  }]);
