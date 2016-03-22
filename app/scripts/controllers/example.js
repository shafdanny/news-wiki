'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:ExampleCtrl
 * @description
 * # ExampleCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('ExampleCtrl', ['$scope', function ($scope) {
      $scope.news = window.news;
  }]);
