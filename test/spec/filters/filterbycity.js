'use strict';

describe('Filter: filterByCity', function () {

  // load the filter's module
  beforeEach(module('cricketwcApp'));

  // initialize a new instance of the filter before each test
  var filterByCity;
  beforeEach(inject(function ($filter) {
    filterByCity = $filter('filterByCity');
  }));

  it('should return the input prefixed with "filterByCity filter:"', function () {
    var text = 'angularjs';
    expect(filterByCity(text)).toBe('filterByCity filter: ' + text);
  });

});
