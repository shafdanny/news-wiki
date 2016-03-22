'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:NewspreviewCtrl
 * @description
 * # NewspreviewCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('NewspreviewCtrl', ['$scope', 'nytApi', '$window', function ($scope, nytApi, $window) {

  	$scope.articleClick = function() {
  		$window.open('#/example', '_blank');
  	}

  }]);
