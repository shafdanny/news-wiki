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
    
    $scope.sections = section;

    // by default, all sections is selected
    $scope.user = {
      sections: ['world', 'politics', 'business', 'technology', 'travel', 'sports']
    };
  
}]);
