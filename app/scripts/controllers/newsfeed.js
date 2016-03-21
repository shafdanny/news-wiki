'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:NewsfeedCtrl
 * @description
 * # NewsfeedCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('NewsfeedCtrl', ['$scope', 'nytApi', function ($scope, nytApi) {
    $scope.greeting = "Hello from Newsfeed";

    var topStoriesApiCall = nytApi.getTopStories('home');
    topStoriesApiCall.then(function(data) {
      console.log(data);
      decodeApiCall(data);
    });

    function decodeApiCall(data) {
      var results = data.results;
      console.log(results);  
    }
  
  }]);
