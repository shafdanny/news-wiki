'use strict';

describe('Controller: NewspreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('newswikiApp'));

  var NewspreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewspreviewCtrl = $controller('NewspreviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewspreviewCtrl.awesomeThings.length).toBe(3);
  });
});
