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
    $scope.searchTerm = "";

    $scope.selectText = function() {
      var text = "";
      if (window.getSelection) {
          text = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
          text = document.selection.createRange().text;
      }

      
      $scope.selectedText = text;

      if($scope.selectedText !== ""){
        $scope.searchTerm = $scope.selectedText;
      }

    }
  }]);
