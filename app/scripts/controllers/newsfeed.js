'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:NewsfeedCtrl
 * @description
 * # NewsfeedCtrl
 * Controller of the newswikiApp
 */

/* Some of the section that is available for the API */
const section = ['world', 'politics', 'business', 'technology', 'travel', 'sports'];
const color = ['#ff0000'];

angular.module('newswikiApp')
  .controller('NewsfeedCtrl', ['$scope', 'nytApi', function ($scope, nytApi) {
    $scope.greeting = "Hello from Newsfeed";
    $scope.allResults = [];
    $scope.color = color;

    $scope.sections = section;

    // by default, all sections is selected
    $scope.user = {
      sections: ['world', 'politics', 'business', 'technology', 'travel', 'sports']
    };

    $scope.update = function () {
      $scope.allResults = [];
      console.log($scope.user.sections);
      console.log("Updating...");
      $scope.user.sections.forEach(function(entry) {
        console.log(entry);
        callApi(entry);
      });
    };
    
    $scope.update();
    
    function callApi(section) {
      var topStoriesApiCall = nytApi.getTopStories(section);
      topStoriesApiCall.then(function(data) {
        console.log(data);
        decodeApiCall(data);
      });  
    }
    
    function decodeApiCall(data) {
      var sectionObject = {};
      sectionObject.section = data.section;
      sectionObject.results = data.results;
      var style = { 'background-color':'red'};
      sectionObject.style = style;
      console.log(sectionObject);
      $scope.allResults.push(sectionObject);
      console.log($scope.allResults);  
    }
  
}]);
