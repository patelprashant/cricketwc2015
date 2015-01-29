'use strict';

/**
 * @ngdoc filter
 * @name cricketwcApp.filter:filterByTeam
 * @function
 * @description
 * # filterByTeam
 * Filter in the cricketwcApp.
 */
angular.module('cricketwcApp')
  .filter('filterByTeam', function () {
    return function (input) {
      return 'filterByTeam filter: ' + input;
    };
  });

