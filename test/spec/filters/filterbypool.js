'use strict';

describe('Filter: filterByPool', function () {

  // load the filter's module
  beforeEach(module('cricketwcApp'));

  // initialize a new instance of the filter before each test
  var filterByPool;
  beforeEach(inject(function ($filter) {
    filterByPool = $filter('filterByPool');
  }));

  it('should return the input prefixed with "filterByPool filter:"', function () {
    var text = 'angularjs';
    expect(filterByPool(text)).toBe('filterByPool filter: ' + text);
  });

});
