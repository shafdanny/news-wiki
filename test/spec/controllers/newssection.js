'use strict';

describe('Controller: NewssectionCtrl', function () {

  // load the controller's module
  beforeEach(module('newswikiApp'));

  var NewssectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewssectionCtrl = $controller('NewssectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewssectionCtrl.awesomeThings.length).toBe(3);
  });
});
