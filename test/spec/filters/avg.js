'use strict';

describe('Filter: avg', function () {

  // load the filter's module
  beforeEach(module('ngDiscoApp'));

  // initialize a new instance of the filter before each test
  var avg;
  beforeEach(inject(function ($filter) {
    avg = $filter('avg');
  }));

  it('should return the input prefixed with "avg filter:"', function () {
    var text = 'angularjs';
    expect(avg(text)).toBe('avg filter: ' + text);
  });

});
