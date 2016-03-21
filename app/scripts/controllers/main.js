'use strict';

/**
 * @ngdoc function
 * @name newswikiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newswikiApp
 */
angular.module('newswikiApp')
  .controller('MainCtrl', ['nytApi', 'wikiApi', function (nytApi, wikiApi) {
    nytApi.hello('test');
    nytApi.getTopStories('home');
    wikiApi.getWiki('Donald Trump', function(result){ console.log(result);});
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
