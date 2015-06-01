'use strict';

describe('Filter: tags', function () {

  // load the filter's module
  beforeEach(module('ngDiscoApp'));

  // initialize a new instance of the filter before each test
  var tags;
  beforeEach(inject(function ($filter) {
    tags = $filter('tags');
  }));

  it('should return the input prefixed with "tags filter:"', function () {
    var text = 'angularjs';
    expect(tags(text)).toBe('tags filter: ' + text);
  });

});
