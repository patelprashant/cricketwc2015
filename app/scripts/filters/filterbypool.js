'use strict';

/**
 * @ngdoc filter
 * @name cricketwcApp.filter:filterByPool
 * @function
 * @description
 * # filterByPool
 * Filter in the cricketwcApp.
 */
angular.module('cricketwcApp')
  .filter('filterByPool', function () {
    return function (input, data) {
      if(input){
        console.log(data);
        return;
      }
    };
  });

