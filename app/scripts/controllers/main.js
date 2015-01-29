'use strict';

/**
 * @ngdoc function
 * @name cricketwcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cricketwcApp
 */
angular.module('cricketwcApp')
    .controller('MainCtrl', function($scope, $firebase) {
        var ref = new Firebase('https://cricketwc2015.firebaseio.com/0/schedule');

        var sync = $firebase(ref);

        var matchDataList = sync.$asArray();

        matchDataList.$loaded().then(function() {
            // console.log("matchDataList has " + matchDataList.length + " item(s)");
            $scope.matchDataList = matchDataList;
            $scope.totalItems = matchDataList.length;
        });

        $scope.oneAtATime = true;


        //filter: Filter By Pool
        //Initialise the selection list
        $scope.filterByPoolOptions = {
          poolTypes: [
            {groupName : 'Select Pool'},
            {groupName : 'Pool A'},
            {groupName : 'Pool B'},
            {groupName : 'Knockouts'}
          ]
        };
        //Mapped to the model to filter
        $scope.filterPoolTypeItem = {
          poolType: $scope.filterByPoolOptions.poolTypes[0]
        };
        //Filter function
        $scope.filterByPool = function (matchDataList) {
          if (matchDataList.groupName === $scope.filterPoolTypeItem.poolType.groupName) {
            return true;
          }else if ($scope.filterPoolTypeItem.poolType.groupName === 'Select Pool') {
            return true;
          } else {
            return false;
          }
        };
    });
