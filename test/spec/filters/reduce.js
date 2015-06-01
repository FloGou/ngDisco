'use strict';

describe('Filter: reduce', function () {

  // load the filter's module
  beforeEach(module('ngDiscoApp'));

  // initialize a new instance of the filter before each test
  var reduce;
  beforeEach(inject(function ($filter) {
    reduce = $filter('reduce');
  }));

  it('should return the input prefixed with "reduce filter:"', function () {
    var text = 'angularjs';
    expect(reduce(text)).toBe('reduce filter: ' + text);
  });

});
