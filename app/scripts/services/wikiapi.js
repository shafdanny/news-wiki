'use strict';

/**
 * @ngdoc service
 * @name newswikiApp.wikiapi
 * @description
 * # wikiApi
 * Service in the newswikiApp.
 */
const baseUrl = 'https://en.wikipedia.org/w/api.php';

const query = '?action=query&prop=extracts&format=json&callback=JSON_CALLBACK';


angular.module('newswikiApp')
  .service('wikiApi', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getWiki = function(title, callback) {
    	$http.jsonp(baseUrl + query + "&titles=" + title)
    	.success(function(data){
    		var pages = data.query.pages;
    		console.log(pages);
			$.each(pages, function(test, value) {
			    var extract = value.extract;
			    callback(extract);
			});    
		}).error(function (error) {
            // in case of error
            console.log('Error retrieving data' + error);
        });
    };
	
	this.extract = this.extract;

    console.log('Wiki');
   
  }]);
