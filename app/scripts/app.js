'use strict';

/**
 * @ngdoc overview
 * @name newswikiApp
 * @description
 * # newswikiApp
 *
 * Main module of the application.
 */
angular
  .module('newswikiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'checklist-model'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/wikipedia', {
        templateUrl: 'views/wikipedia.html',
        controller: 'WikipediaCtrl',
        controllerAs: 'wikipedia'
      })
      .when('/newsfeed', {
        templateUrl: 'views/newsfeed.html',
        controller: 'NewsfeedCtrl',
        controllerAs: 'newsfeed'
      })
      .when('/newssection', {
        templateUrl: 'views/newssection.html',
        controller: 'NewssectionCtrl',
        controllerAs: 'newssection'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
