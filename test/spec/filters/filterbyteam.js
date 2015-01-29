'use strict';

describe('Filter: filterByTeam', function () {

  // load the filter's module
  beforeEach(module('cricketwcApp'));

  // initialize a new instance of the filter before each test
  var filterByTeam;
  beforeEach(inject(function ($filter) {
    filterByTeam = $filter('filterByTeam');
  }));

  it('should return the input prefixed with "filterByTeam filter:"', function () {
    var text = 'angularjs';
    expect(filterByTeam(text)).toBe('filterByTeam filter: ' + text);
  });

});
