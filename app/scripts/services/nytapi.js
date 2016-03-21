'use strict';

/**
 * @ngdoc service
 * @name newswikiApp.nytApi
 * @description
 * # nytApi
 * Service in the newswikiApp.
 */

/**
 * This is the format used for the NYT api call
 * http://api.nytimes.com/svc/topstories/v1/{section}.{response-format}?api-key={your-api-key}
 */
const topStoriesUrl = 'http://api.nytimes.com/svc/topstories/v1/';
const topStoriesApiKey = 'ab131185574c11ac466f0c3d11434857:18:74643530';

angular.module('newswikiApp')
  .service('nytApi', ['$http', '$q', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getTopStories = function(section) {
        var deferred = $q.defer();
    	var response = $http.get(topStoriesUrl + section + '.json?api-key=' + topStoriesApiKey)
    	.success(function (data) {
            //console.log(data);
            deferred.resolve(data);
        })
        .error(function (error) {
            // in case of error
            console.log('Error retrieving data ' + error);
            deferred.reject('Error');
        });

        return deferred.promise;
    };

    this.hello = function(name) { 
    	console.log('Hello ' + name);
    };
  }]);
