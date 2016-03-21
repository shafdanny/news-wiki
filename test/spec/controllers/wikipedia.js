'use strict';

describe('Controller: WikipediaCtrl', function () {

  // load the controller's module
  beforeEach(module('newswikiApp'));

  var WikipediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WikipediaCtrl = $controller('WikipediaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WikipediaCtrl.awesomeThings.length).toBe(3);
  });
});
