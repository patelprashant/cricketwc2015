'use strict';

/**
 * @ngdoc filter
 * @name cricketwcApp.filter:filterByCity
 * @function
 * @description
 * # filterByCity
 * Filter in the cricketwcApp.
 */
angular.module('cricketwcApp')
  .filter('filterByCity', function () {
    return function (input) {
      return 'filterByCity filter: ' + input;
    };
  });

