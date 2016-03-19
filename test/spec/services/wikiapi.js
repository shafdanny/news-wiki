'use strict';

describe('Service: wikiapi', function () {

  // load the service's module
  beforeEach(module('newswikiApp'));

  // instantiate service
  var wikiapi;
  beforeEach(inject(function (_wikiapi_) {
    wikiapi = _wikiapi_;
  }));

  it('should do something', function () {
    expect(!!wikiapi).toBe(true);
  });

});
