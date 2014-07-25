'use strict';

describe('Service: ellwood', function () {

  // load the service's module
  beforeEach(module('anzacMockupApp'));

  // instantiate service
  var ellwood;
  beforeEach(inject(function (_ellwood_) {
    ellwood = _ellwood_;
  }));

  it('should do something', function () {
    expect(!!ellwood).toBe(true);
  });

});
